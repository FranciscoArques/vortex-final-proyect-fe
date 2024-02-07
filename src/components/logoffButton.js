import React from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';

const LogoffButton = () => {
    const user = useSelector(state => state.auth);
    const handleLogoff = async () => {
        try {
        const response = await axios.post('/api/logoff', {
            userId: user.userId,
            tokenToRevoke: user.token
        });
        console.log(response.data);
        } catch (error) {
        console.error('Error logging off:', error.message);
        }
    };

    return (
        <Button variant="contained" color="secondary" onClick={handleLogoff}>
        Logoff
        </Button>
    );
    };

export default LogoffButton;
