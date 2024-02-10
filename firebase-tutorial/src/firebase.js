import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// テストモードのため発行から30日で動かなくなるので注意
const firebaseConfig = {
    apiKey: "AIzaSyAMDenTnUxywj2QWosBQZUPD0NQEmc52A4",
    authDomain: "fir-react-tutorial-f1a98.firebaseapp.com",
    projectId: "fir-react-tutorial-f1a98",
    storageBucket: "fir-react-tutorial-f1a98.appspot.com",
    messagingSenderId: "811386434287",
    appId: "1:811386434287:web:5cb2752a698da3984f611a"
  };

  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)

  export default db;