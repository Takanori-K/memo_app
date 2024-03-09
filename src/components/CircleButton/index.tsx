import { View, Text, StyleSheet } from 'react-native'

import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const CircleButton = (props: Props): JSX.Element => {
  const { children } = props
  return (
    <View style={styles.circleButton}>
      <Text style={styles.circleButtonLabel}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  circleButton: {
    position: 'absolute',
    right: 40,
    bottom: 40,
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#467FD3',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8
  },
  circleButtonLabel: {
    color: 'white',
    fontSize: 40,
    lineHeight: 48
  }
})
