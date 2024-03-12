import {
  View,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  Alert
} from 'react-native'
import { useEffect, useState, useCallback } from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import { doc, getDoc, setDoc, Timestamp } from 'firebase/firestore'
import { db, auth } from '../../config'
import { CircleButton, Icon } from '../../components'

const Edit = (): JSX.Element => {
  const { id } = useLocalSearchParams()
  const [bodyText, setBodyText] = useState('')
  useEffect(() => {
    if (auth.currentUser === null) return
    const ref = doc(db, `users/${auth.currentUser.uid}/memos`, String(id))
    getDoc(ref)
      .then((docRef) => {
        const RemoteBodyText = docRef?.data()?.bodyText
        setBodyText(String(RemoteBodyText))
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const handlePress = useCallback(() => {
    if (auth.currentUser === null) return
    const ref = doc(db, `users/${auth.currentUser.uid}/memos`, String(id))
    setDoc(ref, {
      bodyText,
      updatedAt: Timestamp.fromDate(new Date())
    })
      .then(() => {
        router.back()
      })
      .catch(() => {
        Alert.alert('更新に失敗しました。')
      })
  }, [bodyText, auth, id])
  return (
    <KeyboardAvoidingView behavior='height' style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          multiline
          value={bodyText}
          onChangeText={(text) => { setBodyText(text) }}
        />
      </View>
      <CircleButton onPress={handlePress}>
        <Icon name='check' size={40} color='white' />
      </CircleButton>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inputContainer: {
    paddingVertical: 32,
    flex: 1
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
    paddingHorizontal: 27
  }
})

export default Edit
