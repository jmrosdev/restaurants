import { initializeApp } from 'firebase/compat/app'

const firebaseConfig = {
    apiKey: "AIzaSyBJFqOiaGiMc2_Yx7XavJu4BWAiAmw3RjA",  
    authDomain: "restaurants-427db.firebaseapp.com",  
    projectId: "restaurants-427db",  
    storageBucket: "restaurants-427db.appspot.com",  
    messagingSenderId: "574812051913",  
    appId: "1:574812051913:web:d65dcb972661e28b957018"  
  }

export const firebaseApp = initializeApp(firebaseConfig)
  