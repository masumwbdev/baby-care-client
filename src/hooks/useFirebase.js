import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useState } from "react";


initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();
    const signInUsingGoogle = (location, history) => {
        // setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user;
            setError('')
        }).catch((error) => {
            setError(error.message)
        })
        // .finally(() => setIsLoading(false))
    }
    const logOut = () => {
        signOut(auth)
            .then(() => { })
    }
    return{
        user,
        setUser,
        signInUsingGoogle,
        logOut
    }

}
export default useFirebase;