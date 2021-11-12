// import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";
// import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
// import { useState } from "react";


// initializeAuthentication()

// const useFirebase = () => {
//     const [user, setUser] = useState({});
//     const [error, setError] = useState('');

//     const auth = getAuth();
//     const signInUsingGoogle = (location, history) => {
//         // setIsLoading(true);
//         const googleProvider = new GoogleAuthProvider();
//         signInWithPopup(auth, googleProvider)
//         .then((result) => {
//             const user = result.user;
//             setError('')
//         }).catch((error) => {
//             setError(error.message)
//         })
//         // .finally(() => setIsLoading(false))
//     }
//     const logOut = () => {
//         signOut(auth)
//             .then(() => { })
//     }
//     return{
//         user,
//         setUser,
//         signInUsingGoogle,
//         logOut
//     }

// }
// export default useFirebase;



import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";



initializeAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')
    const [admin, setAdmin] = useState(false)
    const auth = getAuth()

    const registerUser = (email, password,name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('')
                const newUser = {email, displayName: name}
                setUser(newUser)

                // save user to the database 
                saveUser(email, name, 'POST');

                updateProfile(auth.currentUser, {
                    displayName: name
                  }).then(() => {
                  }).catch((error) => {
                  });
                history.replace('/');
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))
    }

    const loginUser = (email, password, location, history) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/'
                history.replace(destination)
                setError('')
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))
    }

    const signInUsingGoogle = (location, history) => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user;
            saveUser(user.email, user.displayName, 'PUT')
            setError('')
            const destination = location?.state?.from || '/'
            history.replace(destination)
        }).catch((error) => {
            setError(error.message)
        })
        .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        fetch(`http://localhost:5000/top-users/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
    }, [user.email])

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                setUser(user)
                // ...
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribe;
    }, [])

    const saveUser = (email, displayName, method) => {
        const user = {email, displayName};
        fetch('http://localhost:5000/top-users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then()

    }

    const logOut = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
        })
            .finally(() => setIsLoading(false))
    }

    return {
        user,
        isLoading,
        admin,
        registerUser,
        loginUser,
        signInUsingGoogle,
        error,
        logOut
    }
}
export default useFirebase;