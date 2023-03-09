import { useContext } from 'react';
import { RiLogoutBoxLine } from 'react-icons/ri';
import FirebaseContext from '../FirebaseContext';
import Button from './Button';

const SignOut = () => {
  const { auth } = useContext(FirebaseContext);

  return (
    <Button onClick={() => auth?.signOut()}>
      <RiLogoutBoxLine /> Sign Out
    </Button>
  );
};

export default SignOut;
