// import React from 'react';
// import { useHistory, useLocation } from 'react-router';
// import useFirebase from '../../../hooks/useFirebase';

// const Login = () => {
//     const { signInUsingGoogle, setUser } = useFirebase();

//     const history = useHistory();
//     const location = useLocation();
//     // const redirect_url = location.state?.from || '/home'
//     const handleGoogle = () => {
//         signInUsingGoogle(location, history)
//     }
//     return (
//         <div>
//             <button onClick={handleGoogle}>Google Sign in</button>
//         </div>
//     );
// };

// export default Login;


import { Container, Grid, Button, CircularProgress, Alert } from '@mui/material';
import React, {useState} from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {user, isLoading, loginUser,signInUsingGoogle, error} = useAuth();
    const location = useLocation()
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value)
        const newLoginData = {...loginData}
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLogin = e => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault()
    }
    const handleGoogle = () => {
        signInUsingGoogle(location, history)
        
    }
    return (
        <Container>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h5" gutterBottom component="div">
                        Login
                    </Typography>
                    <form onSubmit={handleLogin}>
                        <TextField id="standard-basic"
                            sx={{ width: '50%', m: 1 }}
                            label="Your Email"
                            type="email"
                            name="email"
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField id="standard-basic"
                            sx={{ width: '50%', m: 1 }}
                            label="Your Password"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard" />
                        <Button variant="contained" type="submit" sx={{ width: '50%', m: 1 }}>Login</Button>
                        <br />
                        <Link to="/register">
                            <Button>Are you new user? please Register</Button>
                        </Link>
                    </form>
                    <Button onClick={handleGoogle}>Login using google</Button>
                    {
                        isLoading && <CircularProgress color="secondary" />
                    }
                    {
                        user?.displayName && <Alert severity="success">User added successfully</Alert>
                    }
                    {
                        error && <Alert severity="error">{error}</Alert>
                    }
                </Grid>
                <Grid item xs={12} md={6}>
                    <h1>Login</h1>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;