import { Auth, User } from 'firebase/auth';
import {
  CollectionReference,
  DocumentData,
  Firestore,
} from 'firebase/firestore';
import { createContext } from 'react';

interface ContextProps {
  auth?: Auth;
  db?: Firestore;
  user?: null | User;
  messageCollection?: null | CollectionReference<DocumentData>;
}

const FirebaseContext = createContext<ContextProps>({});

export default FirebaseContext;
