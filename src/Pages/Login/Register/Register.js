import { Container, Grid, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Register.css'
import Footer from '../../Shared/Footer/Footer';

const Register = () => {
    const history = useHistory()
    const [loginData, setLoginData] = useState({});
    const { user, registerUser, isLoading, error } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value)
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLogin = e => {
        e.preventDefault()
        if (loginData.password !== loginData.passwordTwo) {
            alert('wrong password');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);

    }
    return (

        <div>
            <Container>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid>
                        <Typography className="text-center" variant="h3" gutterBottom component="div">
                            Register
                        </Typography>
                        {!isLoading && <form className="text-center mb-5 rounded py-5 register-form shadow-lg mx-auto w-50" onSubmit={handleLogin}>
                            <TextField id="standard-basic"
                                sx={{ width: '50%', m: 1 }}
                                label="Your Name"
                                name="name"
                                type="text"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField id="standard-basic"
                                sx={{ width: '50%', m: 1 }}
                                label="Your Email"
                                type="email"
                                name="email"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField id="standard-basic"
                                sx={{ width: '50%', m: 1 }}
                                label="Your Password"
                                type="password"
                                name="password"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField id="standard-basic"
                                sx={{ width: '50%', m: 1 }}
                                label="Re-type Password"
                                type="password"
                                name="passwordTwo"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <Button variant="contained" type="submit" sx={{ width: '50%', m: 1 }}>Register</Button>
                            <br />
                            <Link to="/login">
                                <Button>Already registerd? please Login</Button>
                            </Link>
                        </form>}
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

export default Register;