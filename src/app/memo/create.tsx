import {
  View,
  TextInput,
  StyleSheet,
  Alert
} from 'react-native'
import { useState, useCallback } from 'react'
import { router } from 'expo-router'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { CircleButton, Icon, KeyboardSafeView } from '../../components'
import { db, auth } from '../../config'

const Create = (): JSX.Element => {
  const [bodyText, setBodyText] = useState('')

  const handlePress = useCallback(() => {
    if (auth.currentUser === null) { return null }
    const ref = collection(db, `users/${auth.currentUser?.uid}/memos`)
    addDoc(ref, {
      bodyText,
      updatedAt: Timestamp.fromDate(new Date())
    })
      .then((docRef) => {
        console.log('success', docRef)
        router.back()
      })
      .catch((error) => {
        const { message } = error
        Alert.alert(String(message))
      })
  }, [bodyText, auth])
  return (
    <KeyboardSafeView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          multiline
          autoFocus
          value={bodyText}
          onChangeText={(text) => { setBodyText(text) }}
          />
      </View>
      <CircleButton onPress={handlePress}>
        <Icon name='check' size={40} color='white' />
      </CircleButton>
    </KeyboardSafeView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inputContainer: {
    paddingVertical: 32,
    paddingHorizontal: 27,
    flex: 1
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24
  }
})

export default Create
