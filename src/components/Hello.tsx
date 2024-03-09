import { View, Text, StyleSheet } from 'react-native'
import type { TextStyle } from 'react-native'
import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  style?: TextStyle
}

const Hello = (props: Props): JSX.Element => {
  const { children, style } = props
  return (
    <View>
      <Text style={[styles.text, style]}>Hello {children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    backgroundColor: 'blue',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 16
  }
})

export default Hello
