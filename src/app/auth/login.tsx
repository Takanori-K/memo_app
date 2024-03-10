import { View, Text, TextInput, StyleSheet } from 'react-native'
import { Header } from '../../components'

const Login = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.inner}>
        <Text style={styles.title}>Login</Text>
        <TextInput style={styles.input} value='Email address' />
        <TextInput style={styles.input} value='Password'/>
        <View style={styles.button}>
          <Text style={styles.buttonLabel}>Submit</Text>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Not registered?</Text>
          <Text style={styles.footerLink}>Sign up here!</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8'
  },
  inner: {
    paddingVertical: 24,
    paddingHorizontal: 27
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 32,
    marginBottom: 24
  },
  input: {
    height: 48,
    fontSize: 16,
    padding: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#DDD',
    backgroundColor: 'white'
  },
  button: {
    backgroundColor: '#467FD3',
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 24
  },
  buttonLabel: {
    fontSize: 16,
    lineHeight: 32,
    color: 'white',
    paddingVertical: 8,
    paddingHorizontal: 24
  },
  footer: {
    flexDirection: 'row'
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    color: 'black',
    marginRight: 8
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: '#467FD3'
  }
})

export default Login
