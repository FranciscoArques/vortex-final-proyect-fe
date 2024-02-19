import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { TextField, Button } from '@mui/material';
import { createDoctor } from '../../tasks/doctorCreateActions';

const DoctorCreate = () => {
    const getToken = JSON.parse(localStorage.getItem('token'));
    const token = getToken.token;
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        surname: '',
        name: '',
        speciality: '',
        gender: '',
        age: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createDoctor(formData));
        window.location.reload();
    };

    return (
        <div className='div-log'>
            <h2 className='log'>Create New Doctor</h2>
            <form className='create-doctor-form' onSubmit={handleSubmit}>
            <section className='log'>
                <TextField
                    name="surname"
                    label="Surname"
                    value={formData.surname}
                    onChange={handleChange}
                />
            </section>
            <section className='log'>
                <TextField
                    name="name"
                    label="Name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </section>
            <section className='log'>
                <TextField
                    name="speciality"
                    label="Speciality"
                    value={formData.speciality}
                    onChange={handleChange}
                />
            </section>
            <section className='log'>
                <TextField
                    name="gender"
                    label="Gender"
                    value={formData.gender}
                    onChange={handleChange}
                />
            </section>
            <section className='log'>
                <TextField
                    name="age"
                    label="Age"
                    type="number"
                    value={formData.age}
                    onChange={handleChange}
                />
            </section>
            <section className='log'>
                <Button type="submit" variant="contained" color="primary">
                    Create Doctor
                </Button>
            </section>
            </form>
        </div>
    );
};

export default DoctorCreate;
