import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { clearPersistedState } from '../../app/store';

const LogoffButton = () => {
    const dispatch = useDispatch();
    const userId = useSelector(state => state.auth.userId);
    const token = useSelector(state => state.auth.token);
    const navigate = useNavigate();

    const handleLogoff = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/users/logoff', {
                userId: userId,
                tokenToRevoke: token
            });
            localStorage.clear();
            dispatch(clearPersistedState());

            navigate('/');
            window.location.reload();
            
            console.log(response.data);
        } catch (error) {
            console.error('Error logging off:', error.message);
        }
    };

    return (
        <Button color="inherit" onClick={handleLogoff}>
            Logoff
        </Button>
    );
};

export default LogoffButton;