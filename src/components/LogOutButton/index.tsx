import { TouchableOpacity, Text, StyleSheet, Alert } from 'react-native'
import { useCallback } from 'react'
import { router } from 'expo-router'
import { signOut } from 'firebase/auth'
import { auth } from '../../config'

export const LogOutButton = (): JSX.Element => {
  const handlePress = useCallback(() => {
    signOut(auth)
      .then(() => {
        router.replace('auth/log_in')
      })
      .catch(() => {
        Alert.alert('ログアウトに失敗しました。')
      })
  }, [])
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.text} >ログアウト</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    lineHeight: 24,
    color: 'rgba(255, 255, 255, 0.7)'
  }
})
