import {
  View,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet
} from 'react-native'
import { Header, CircleButton, Icon } from '../../components'

const Edit = (): JSX.Element => {
  return (
    <KeyboardAvoidingView behavior='height' style={styles.container}>
      <Header />
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} multiline value={'買い物\nリスト'} />
      </View>
      <CircleButton>
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

export default Edit