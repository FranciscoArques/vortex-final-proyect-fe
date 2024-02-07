import React, { useState } from 'react';
import axios from 'axios';
import { Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { registerStart, registerSuccess, registerFailure } from '../controllers/registrationSlice';

const RegisterButton = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        try {
        dispatch(registerStart());

        const response = await axios.post('/api/register', {
            name,
            email,
            age,
            password
        });

        dispatch(registerSuccess());
        console.log(response.data);
        } catch (error) {
        dispatch(registerFailure(error.message));
        console.error('Error registering:', error.message);
        }
    };

    return (
        <div>
        <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
            label="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
        />
        <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleRegister}>
            Register
        </Button>
        </div>
    );
};

export default RegisterButton;
