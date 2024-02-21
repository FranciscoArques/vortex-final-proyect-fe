import React, { useEffect, useState  } from 'react';
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

    const [doctorInfo, setDoctorInfo] = useState(null);

    useEffect(() => {

        axios.get(`http://localhost:5000/api/doctors/${id}`)
            .then(response => {
                setDoctorInfo(response.data.doctor);
            })
            .catch(error => {
                console.error('Error fetching doctor information:', error);
            });

        dispatch(appointmentDoctor(id));
    }, [dispatch, id]);

    const { loading, error, appointments } = useSelector(selectAppointments);

    useEffect(() => {
        dispatch(appointmentDoctor(id));
    }, [dispatch, id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            { doctorInfo && (
                <h2 className='title log'>{ doctorInfo.surname || "" } { doctorInfo.name || "" }'s Appointments</h2>
            )}
            { !doctorInfo && (
                <h2 className='title log'>Doctor's Appointments</h2>
            )}
            { !appointments.appointments && (
                    <h3 className='title log'>Any appointments have been made</h3>
                )}
            { appointments.appointments && (
                <ul className='div-log'>
                    {appointments.appointments.map(appointment => (
                        <li key={appointment._id}>
                            <h3>Appointment</h3>
                            <p>Date: {appointment.date}</p>
                            <p>Status: {appointment.status}</p>
                            { appointment.status === 'taken' && (
                                <p>Taken By: {appointment.takenBy.user.name}</p>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default AppointmentsDoctor;

