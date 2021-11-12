

import { Container, Grid, Button, CircularProgress, Alert } from '@mui/material';
import React, {useState} from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css'
import Footer from '../../Shared/Footer/Footer';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {user, isLoading, loginUser,signInUsingGoogle, error} = useAuth();
    const location = useLocation()
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData}
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLogin = e => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault()
    }
    // const handleGoogle = () => {
    //     signInUsingGoogle(location, history)
        
    // }
    return (
        <div>
            <Container>
            <Grid rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Typography className="text-center mt-5" variant="h4" gutterBottom component="div">
                        Please Login
                    </Typography>
                <Grid  item>
                    <form className="text-center mb-5 rounded py-5 login-form shadow-lg" onSubmit={handleLogin}>
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
                            <Button>Are you a new user? please Register</Button>
                        </Link>
                        {/* <div>------------or--------------</div>
                        <Button onClick={handleGoogle}><i class="fab fa-google fs-2 text-danger me-2"></i> Login using google</Button> */}
                    </form>
                    
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
            </Grid>
            
        </Container>
        <div>
            <Footer></Footer>
        </div>
        </div>
    );
};

export default Login;