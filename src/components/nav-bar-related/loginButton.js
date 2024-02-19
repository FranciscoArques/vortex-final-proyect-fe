import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { login } from '../../controllers/authSlice';

const LoginButton = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/users/login', {
                email,
                password
            });

            const token = response.data.token;
            localStorage.setItem('token', JSON.stringify({ token }));

            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            dispatch(login(response.data));

            navigate('/');
        } catch (error) {
            console.error('Error logging in:', error.message);
        }
    };

    return (
        <div className='div-log'>
            <section className='log'>
                <h2>Log-In</h2>
            </section>
            <section className='log'>
                <TextField
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </section>
            <section className='log'>
                <TextField
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </section>
            <section className='log'>
                <Button variant="contained" color="primary" onClick={handleLogin}>
                    Accept
                </Button>
            </section>
        </div>
    );
};

export default LoginButton;
