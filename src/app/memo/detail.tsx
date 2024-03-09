import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { Header, CircleButton, Icon } from '../../components'

const Detail = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>買い物リスト</Text>
        <Text style={styles.memoDate}>2024年3月15日 18:00</Text>
      </View>
      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoBodyText}>
          買い物リスト
          書体やレイアウトなどを確認するために用います。
          本文ようなので、使い方を間違えると、不自然に見えることもありますので、要注意でです。
        </Text>
      </ScrollView>
      <CircleButton style={styles.circleButton}>
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
    paddingVertical: 32,
    paddingHorizontal: 27
  },
  memoBodyText: {
    fontSize: 16,
    lineHeight: 24,
    color: 'black'
  },
  circleButton: {
    top: 160,
    bottom: 'auto'
  }
})

export default Detail
