import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateAppointment } from '../../tasks/updateAppointmentActions';
import { Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateAppointmentForm = () => {
    const getToken = JSON.parse(localStorage.getItem('token'));
    const token = getToken.token;
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    const dispatch = useDispatch();
    const { id } = useParams();

    const [formData, setFormData] = useState({
        date: '',
        status: '',
    });

    useEffect(() => {
        const fetchAppointmentData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/appointments/filter/${id}`);
                const data = response.data;
                setFormData(data.appointment || { date: '', status: '' });
            } catch (error) {
                console.error('Error fetching appointment data:', error);
            }
        };

        fetchAppointmentData();
    }, [id]);

    const handleChange = (e) => {
        setFormData(prevAppointment => ({
            ...prevAppointment,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateAppointment(id, formData));
        window.location.reload();
    };

    if (formData === null) return <div>Loading...</div>;

    return (
        <div className='div-log'>
            <h2 className='log'>Update Appointment</h2>
            <form className='create-doctor-form' onSubmit={handleSubmit}>
                <section className='log'>
                    <input type="text" name="date" value={formData.date} onChange={handleChange} />
                </section>
                <section className='log'>
                    <input type="text" name="status" value={formData.status} onChange={handleChange} />
                </section>
                <section className='log'>
                    <Button type="submit" variant="contained" color="primary">Update</Button>
                </section>
            </form>
        </div>
    );
};

export default UpdateAppointmentForm;