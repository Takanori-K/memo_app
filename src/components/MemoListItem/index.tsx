import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import { Link } from 'expo-router'
import { Icon } from '../Icon'

export const MemoListItem = (): JSX.Element => {
  return (
    <Link href='/memo/detail' asChild>
      <TouchableOpacity style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2024年3月15日 18:00</Text>
        </View>
        <TouchableOpacity>
          <Icon name='delete' size={32} color='#B0B0B0' />
        </TouchableOpacity>
      </TouchableOpacity>
    </Link>
  )
}

const styles = StyleSheet.create({
  memoListItem: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)'
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484'
  }
})
