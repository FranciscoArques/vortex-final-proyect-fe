import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { TextField, Button, Grid, Typography } from '@mui/material';
import { createAppointment } from '../../tasks/appointmentCreateActions';

const AppointmentCreate = () => {
    const getToken = JSON.parse(localStorage.getItem('token'));
    const token = getToken.token;
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    const { id } = useParams();
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        time: '',
        date: '',
        status: 'available',
        doctorId: id
    });

    const { time, date } = formData;

    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        dispatch(createAppointment(formData));
        navigate('/appointment')
    };

    return (
        <form className='create-doctor-form' onSubmit={onSubmit}>
        <Grid container spacing={2}>
            <Grid item xs={12}>
            <Typography variant="h6" className='log'>Create Appointment</Typography>
            </Grid>
            <Grid item xs={12}>
            <TextField
                fullWidth
                label="Time"
                name="time"
                value={time}
                onChange={onChange}
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
                fullWidth
                label="Date"
                name="date"
                type="date"
                value={date}
                onChange={onChange}
                InputLabelProps={{
                shrink: true,
                }}
            />
            </Grid>
            <Grid item xs={12}>
            <div className='log'>
            <Button type="submit" variant="contained" color="primary">
                Submit
            </Button>
            </div>
            </Grid>
        </Grid>
        </form>
    );
};

export default AppointmentCreate;
