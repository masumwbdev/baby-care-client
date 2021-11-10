import React from 'react';
import useFirebase from '../../../hooks/useFirebase';

const Login = () => {
    const { signInUsingGoogle,error, setError } = useFirebase();

    const handleGoogle = () => {
        signInUsingGoogle()
            .then(result => {
            })
    }
    return (
        <div>
            <button onClick={handleGoogle}>Google Sign in</button>
        </div>
    );
};

export default Login;