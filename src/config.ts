import { initializeApp } from 'firebase/app'
import { initializeAuth, getReactNativePersistence } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'

const firebaseConfig = {
  apiKey: 'AIzaSyD7PcjJo0PfYRs6R0_UCNHr8owxcDbmaFE',
  authDomain: 'memoapp-cdbe0.firebaseapp.com',
  projectId: 'memoapp-cdbe0',
  storageBucket: 'memoapp-cdbe0.appspot.com',
  messagingSenderId: '897429891021',
  appId: '1:897429891021:web:d2632f6310d4c05a400684'
}

const app = initializeApp(firebaseConfig)
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
})
const db = getFirestore(app)

export { app, auth, db }
