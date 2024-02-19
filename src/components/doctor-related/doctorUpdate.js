import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateDoctor } from '../../tasks/doctorUpdateActions';
import { useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import axios from 'axios';

const DoctorUpdate = () => {
    const getToken = JSON.parse(localStorage.getItem('token'));
    const token = getToken.token;
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    const dispatch = useDispatch();
    const { id } = useParams();
    
    const [doctor, setDoctor] = useState({
        surname: '',
        name: '',
        speciality: '',
        gender: '',
        age: 0,
        doctor: ''
    });

    useEffect(() => {
        const fetchDoctorData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/doctors/${id}`);
                const data = response.data;
                setDoctor(data);
            } catch (error) {
                console.error('Error fetching doctor data:', error);
            }
        };

        fetchDoctorData();
    }, [id]);

    const handleChange = (e) => {
    setDoctor(prevDoctor => ({
        doctor: {
            ...prevDoctor.doctor,
            [e.target.name]: e.target.value
        }
    }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const doctorDataWithId = { ...doctor, _id: id };
        dispatch(updateDoctor(doctorDataWithId));
        window.location.reload();
    };
    

    if (!doctor) return <div>No doctor found</div>;

    return (
        <div className='div-log'>
            <h2 className='log'>Update Doctor</h2>
            <form className='create-doctor-form' onSubmit={handleSubmit}>
                <section className='log'>
                    <input type="text" name="surname" value={doctor.doctor.surname || ''} onChange={handleChange} />
                </section>
                <section className='log'>
                    <input type="text" name="name" value={doctor.doctor.name || ''} onChange={handleChange} />
                </section>
                <section className='log'>
                    <input type="text" name="speciality" value={doctor.doctor.speciality || ''} onChange={handleChange} />
                </section>
                <section className='log'>
                    <input type="text" name="gender" value={doctor.doctor.gender || ''} onChange={handleChange} />
                </section>
                <section className='log'>
                    <input type="number" name="age" value={doctor.doctor.age || ''} onChange={handleChange} />
                </section>
                <section className='log'>
                    <Button type="submit" variant="contained" color="primary">Update</Button>
                </section>
            </form>
        </div>
    );
};


export default DoctorUpdate;