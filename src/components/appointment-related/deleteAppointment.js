import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteAppointment } from '../../tasks/deleteAppointmentActions';
import axios from 'axios';
import Button from '@mui/material/Button';

const DeleteAppointment = ({ appointmentId }) => {
    const getToken = JSON.parse(localStorage.getItem('token'));
    const token = getToken.token;
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    const dispatch = useDispatch();

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this appointment?')) {
        dispatch(deleteAppointment(appointmentId));
        window.location.reload();
        }
    };

    return (
        <Button onClick={handleDelete} variant="contained" color="secondary">
        Delete Appointment
        </Button>
    );
};

export default DeleteAppointment;
