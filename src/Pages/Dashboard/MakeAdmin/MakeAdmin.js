import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';


const MakeAdmin = () => {
    const [email, setEmail] = useState('');

    const handleOnBlur = e => {
        setEmail(e.target.value)
    }

    const handleAdmin = e => {
        e.preventDefault()
        const user = { email }
        fetch('https://intense-hollows-47893.herokuapp.com/top-users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('Admin added successfully')
                }
                console.log(data)
            })
    }

    return (
        <div>
            <h2 className="text-center text-danger mb-4">Make an admin</h2>
            <form className="w-50 mx-auto" onSubmit={handleAdmin}>
                <TextField className="w-50 mb-3" label="Email" type="email" onBlur={handleOnBlur} variant="standard" /> <br />
                <Button variant="contained" type="submit">Make Admin</Button>
            </form>
        </div>
    );
};

export default MakeAdmin;