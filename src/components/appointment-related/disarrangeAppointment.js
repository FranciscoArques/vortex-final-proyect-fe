import React from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { Button } from '@mui/material';
import { disarrangeAppointment } from '../../tasks/disarrangeAppointmentTask';

const DisarrangeAppointmentButton = ({ appointmentId }) => {
    const getToken = JSON.parse(localStorage.getItem('token'));
    const token = getToken.token;
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    const dispatch = useDispatch();

    const handleDisarrange = () => {
        dispatch(disarrangeAppointment(appointmentId));
        window.location.reload();
    };

    return (
        <Button onClick={handleDisarrange} variant="contained" color="warning">
        Disarrange Appointment
        </Button>
    );
};

export default DisarrangeAppointmentButton;
