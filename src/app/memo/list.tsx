import { View, StyleSheet, FlatList, Alert } from 'react-native'
import { useEffect, useState, useCallback } from 'react'
import { router, useNavigation } from 'expo-router'
import { collection, onSnapshot, query, orderBy, deleteDoc, doc } from 'firebase/firestore'
import { db, auth } from '../../config'
import { MemoListItem, CircleButton, Icon, LogOutButton } from '../../components'

import type { Memo } from '../../../types/memo'

const handlePress = (): void => {
  router.push('/memo/create')
}

const List = (): JSX.Element => {
  const [memos, setMemos] = useState<Memo[]>([])
  const navigation = useNavigation()
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => { return <LogOutButton /> }
    })
  }, [])

  useEffect(() => {
    if (auth.currentUser === null) { return }
    const ref = collection(db, `users/${auth.currentUser.uid}/memos`)
    const q = query(ref, orderBy('updatedAt', 'desc'))
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const remoteMemos: Memo[] = []
      snapshot.forEach((doc) => {
        const { bodyText, updatedAt } = doc.data()
        remoteMemos.push({
          id: doc.id,
          bodyText,
          updatedAt
        })
      })
      setMemos(remoteMemos)
    })
    return unsubscribe
  }, [])

  const handlePressDelete = useCallback((id: string) => {
    if (auth.currentUser === null) return
    const ref = doc(db, `users/${auth.currentUser.uid}/memos`, String(id))
    Alert.alert('メモを削除します。', 'よろしいですか？', [
      {
        text: 'キャンセル'
      },
      {
        text: '削除する',
        style: 'destructive',
        onPress: () => {
          deleteDoc(ref)
            .catch(() => {
              Alert.alert('削除に失敗しました。')
            })
        }
      }
    ])
  }, [])
  return (
    <View style={styles.container}>
      <FlatList
        data={memos}
        renderItem={({ item }) => <MemoListItem memo={item} onPress={handlePressDelete} />}
      />
      <CircleButton onPress={handlePress}>
        <Icon name='plus' size={40} color='white' />
      </CircleButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})

export default List
