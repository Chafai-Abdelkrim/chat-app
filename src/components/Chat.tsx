import {
  CollectionReference,
  DocumentData,
  orderBy,
  query,
} from 'firebase/firestore';
import { motion } from 'framer-motion';
import { useContext, useEffect, useRef } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import FirebaseContext from '../FirebaseContext';
import { Github } from './index';

const Chat = () => {
  const { user, messageCollection } = useContext(FirebaseContext);
  const messageQuery = query(
    messageCollection as CollectionReference<DocumentData>,
    orderBy('timestamp', 'asc')
  );
  const [messages, loading] = useCollectionData(messageQuery);
  const bottom = useRef<HTMLDivElement>(null);
  const scrollToBottom = () =>
    bottom.current?.scrollIntoView({ behavior: 'smooth' });

  useEffect(scrollToBottom, [messages]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="Chat"
    >
      <header>
        <Github username='Chafai-Abdelkrim' />
        
      </header>
    </motion.div>
  );
};

export default Chat;
