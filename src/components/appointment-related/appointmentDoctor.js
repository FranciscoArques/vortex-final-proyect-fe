// Your component file
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { appointmentDoctor } from '../../tasks/appointmentDoctorActions';
import { selectAppointments } from '../../controllers/appointmentDoctorSlice';

const AppointmentsDoctor = () => {
    const getToken = JSON.parse(localStorage.getItem('token'));
    const token = getToken.token;
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    const { id } = useParams();
    const dispatch = useDispatch();
    const { loading, error, appointments, doctorId } = useSelector(selectAppointments);

    useEffect(() => {
        dispatch(appointmentDoctor(id));
    }, [dispatch, id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h2>Doctor Appointments</h2>
            <p>Doctor ID: {doctorId}</p>
            <ul>
                {appointments.map(appointment => (
                    <li key={appointment._id}>
                        <p>Date: {appointment.date}</p>
                        <p>Status: {appointment.status}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AppointmentsDoctor;

