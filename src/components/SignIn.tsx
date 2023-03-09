import { Auth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import FirebaseContext from "../FirebaseContext";

const provider = new GoogleAuthProvider();

const SignIn = () => {
    const { auth } = useContext(FirebaseContext);
    const signInWithGoogle = () => {
        signInWithPopup(auth as Auth, provider);
    };

    return (
        
    );
}

export default  SignIn;