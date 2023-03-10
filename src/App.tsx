import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { collection, getFirestore } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import FirebaseContext from './FirebaseContext';
import { Chat, Loading } from './components';
import './styles/App.css';

const firebaseConfig = {
  apiKey: 'AIzaSyCHw_RjC_JsrZECeUCVt77jpyy0wqiHUbo',
  authDomain: 'chat-app-61c03.firebaseapp.com',
  projectId: 'chat-app-61c03',
  storageBucket: 'chat-app-61c03.appspot.com',
  messagingSenderId: '126377294519',
  appId: '1:126377294519:web:24203a20f63154a225ab32',
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

function App() {
  const [user, loading] = useAuthState(auth);
  const messageCollection = collection(db, 'messages');

  return (
    <FirebaseContext.Provider value={{ auth, db, user, messageCollection }}>
      <div className="App">{loading ? <Loading /> : <Chat />}</div>
    </FirebaseContext.Provider>
  );
}

export default App;
