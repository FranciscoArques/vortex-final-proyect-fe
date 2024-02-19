import React, { useState } from 'react';
import axios from 'axios';
import { Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { registerStart, registerSuccess, registerFailure } from '../../controllers/registrationSlice';

const RegisterButton = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [role, setRole] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        try {
        dispatch(registerStart());

        const response = await axios.post('http://localhost:5000/api/users/register', {
            name,
            email,
            age,
            role,
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
        <div className='div-log'>
            <section className='log'>
                <h2>Register</h2>
            </section>
            <section className='log'>
                <TextField
                    label="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
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
                    label="Age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
            </section>
            <section className='log'>
                <TextField
                    label="Role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
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
                <Button variant="contained" color="primary" onClick={handleRegister}>
                    Accept
                </Button>
            </section>
        </div>
    );
};

export default RegisterButton;
