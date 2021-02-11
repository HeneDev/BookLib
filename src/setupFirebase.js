import firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDWMBL2qwK0vGg8Utzso5QPmIR00NVLPmY',
  authDomain: 'booklib-a8bc1.firebaseapp.com',
  projectId: 'booklib-a8bc1',
  storageBucket: 'booklib-a8bc1.appspot.com',
  messagingSenderId: '421329764081',
  appId: '1:421329764081:web:f6bf2458bc137c8f407350',
  measurementId: 'G-7D3550NZNS',
}

firebase.initializeApp(firebaseConfig)
