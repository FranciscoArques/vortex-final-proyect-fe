import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { fetchUserAppointments } from '../../controllers/appointmentUserSlice';

const ShowUserAppointments = () => {
    const getToken = JSON.parse(localStorage.getItem('token'));
    const token = getToken.token;
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    const { id } = useParams();
    const dispatch = useDispatch();
    const { loading, error, appointments } = useSelector(state => state.userAppointments);

    useEffect(() => {
        dispatch(fetchUserAppointments(id));
    }, [dispatch, id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h2 className='title log'>Appointments</h2>
                { !appointments && (
                    <h3 className='title log'>Any appointments have been taken</h3>
                )}
                { appointments && (
                    <section className='div-log'>
                        <ul className='doctor-log'>
                        {appointments.map(appointment => (
                            <li key={appointment._id}>
                                <h3>Appointment</h3>
                                <p>Date: {appointment.date}</p>
                                <p>Doctor: {appointment.doctor.surname} {appointment.doctor.name}</p>
                                <p>Speciality: {appointment.doctor.speciality}</p>
                            </li>
                        ))}
                        </ul>
                    </section>
                )}
        </div>
    );
};

export default ShowUserAppointments;
