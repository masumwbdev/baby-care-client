import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useState } from "react";


initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();
    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
        
        .catch ( (error) => {
            const errorMessage = error.message;
            setError(errorMessage);
        })
    }
    const logOut = () => {
        signOut(auth)
            .then(() => { })
    }
    return{
        user,
        signInUsingGoogle,
        logOut
    }

}
export default useFirebase;