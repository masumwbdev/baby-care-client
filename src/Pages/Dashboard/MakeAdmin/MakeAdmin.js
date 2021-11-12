import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Alert, Button } from '@mui/material';


const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false)

    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    
    const handleAdmin = e => {
        e.preventDefault()
        const user = { email }
        fetch('http://localhost:5000/top-users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data)
                    setSuccess(true)
                }
            })
    }
    
    return (
        <div>
            <h2 className="text-center text-danger mb-4">Make an admin</h2>
            <form className="w-50 mx-auto" onSubmit={handleAdmin}>
                <TextField className="w-50 mb-3" label="Email" type="email" onBlur={handleOnBlur} variant="standard" /> <br />
                <Button variant="contained" type="submit">Make Admin</Button>
            </form>
            {
                success && <Alert severity="success">Make admin successfully</Alert>
            }
        </div>
    );
};

export default MakeAdmin;