import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useFirebase from '../../../hooks/useFirebase';

const Login = () => {
    const { signInUsingGoogle, setUser } = useFirebase();

    const history = useHistory();
    const location = useLocation();
    // const redirect_url = location.state?.from || '/home'
    const handleGoogle = () => {
        signInUsingGoogle(location, history)
    }
    return (
        <div>
            <button onClick={handleGoogle}>Google Sign in</button>
        </div>
    );
};

export default Login;