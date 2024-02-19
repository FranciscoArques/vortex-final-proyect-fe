import React from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { arrangeAppointment } from '../../tasks/arrangeAppointmentAction';
import { Button } from '@mui/material';

const ArrangeAppointmentButton = ({ appointmentId }) => {
    const getToken = JSON.parse(localStorage.getItem('token'));
    const token = getToken.token;
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    const dispatch = useDispatch();

    const handleArrangeAppointment = () => {
        dispatch(arrangeAppointment(appointmentId));
        window.location.reload();
    };

    return (
        <Button onClick={handleArrangeAppointment} variant="contained" color="primary">
        Arrange Appointment
        </Button>
    );
};

export default ArrangeAppointmentButton;
