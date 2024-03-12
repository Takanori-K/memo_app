import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { useState, useEffect, useMemo, useCallback } from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import { onSnapshot, doc } from 'firebase/firestore'
import { db, auth } from '../../config'
import { CircleButton, Icon } from '../../components'

import type { Memo } from '../../../types/memo'

const Detail = (): JSX.Element => {
  const { id } = useLocalSearchParams()
  const [memo, setMemo] = useState<Memo | null>()
  useEffect(() => {
    if (auth.currentUser === null) return
    const ref = doc(db, `users/${auth.currentUser.uid}/memos`, String(id))
    const unsubscribe = onSnapshot(ref, (memoDoc) => {
      const { bodyText, updatedAt } = memoDoc.data() as Memo
      setMemo({
        id: memoDoc.id,
        bodyText,
        updatedAt
      })
    })
    return unsubscribe
  }, [])

  const dateString = useMemo(() => {
    return memo?.updatedAt.toDate().toLocaleString('ja-JP')
  }, [])

  const handlePress = useCallback(() => {
    router.push({ pathname: '/memo/edit', params: { id } })
  }, [id])
  return (
    <View style={styles.container}>
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle} numberOfLines={1}>{memo?.bodyText}</Text>
        <Text style={styles.memoDate}>{dateString}</Text>
      </View>
      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoBodyText}>
          {memo?.bodyText}
        </Text>
      </ScrollView>
      <CircleButton style={styles.circleButton} onPress={handlePress}>
        <Icon name='pencil' size={40} color='white' />
      </CircleButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  memoHeader: {
    height: 96,
    backgroundColor: '#467FD3',
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 19
  },
  memoTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 32
  },
  memoDate: {
    color: 'white',
    fontSize: 12,
    lineHeight: 16
  },
  memoBody: {
    paddingHorizontal: 27
  },
  memoBodyText: {
    fontSize: 16,
    lineHeight: 24,
    color: 'black',
    paddingVertical: 32
  },
  circleButton: {
    top: 60,
    bottom: 'auto'
  }
})

export default Detail
