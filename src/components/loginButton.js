import React, { useState } from 'react';
import axios from 'axios';
import { Button, TextField } from '@mui/material';
import { useSelector } from 'react-redux';

const LoginButton = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const user = useSelector(state => state.auth);

    const handleLogin = async () => {
        try {
        const response = await axios.post('/api/login', {
            email,
            password
        });
        console.log(response.data);
        } catch (error) {
        console.error('Error logging in:', error.message);
        }
    };

    return (
        <div>
        <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleLogin}>
            Login
        </Button>
        </div>
    );
};

export default LoginButton;
