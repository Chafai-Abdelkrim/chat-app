import { Auth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useContext } from 'react';
import { RiGoogleFill } from 'react-icons/ri';
import FirebaseContext from '../FirebaseContext';
import Button from './Button';

const provider = new GoogleAuthProvider();

const SignIn = () => {
  const { auth } = useContext(FirebaseContext);
  const signInWithGoogle = () => {
    signInWithPopup(auth as Auth, provider);
  };

  return (
    <Button onClick={signInWithGoogle}>
      <RiGoogleFill /> SignIn With Google
    </Button>
  );
};

export default SignIn;
