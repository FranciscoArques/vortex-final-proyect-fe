import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAppointments } from '../../tasks/showAppointmentActions';
import { selectShowAppointments } from '../../controllers/showAppointmentSlice';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrangeAppointmentButton from './arrangeAppointment';
import DisarrangeAppointmentButton from './disarrangeAppointment';
import DeleteAppointment from './deleteAppointment';

const ShowAllAppointments = () => {
    const role = useSelector(state => state.auth.userRole);
    const userId = useSelector(state => state.auth.userId);

    const dispatch = useDispatch();
    const { loading, error, data } = useSelector(selectShowAppointments);

    useEffect(() => {
        dispatch(fetchAppointments());
    }, [dispatch]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!data) return null;

    return (
        <div>
            <h2 className="title log">All Appointments</h2>
            <ul className="doctor-detail">
                {data.map(appointment => (
                <li className="doctor-detail" key={appointment._id}>
                    <div>
                    <Typography variant="body1">Date: {appointment.date}</Typography>
                    <Typography variant="body1">Status: {appointment.status}</Typography>
                    <Typography variant="body1">Doctor: {appointment.doctor.surname} {appointment.doctor.name}</Typography>
                    <Typography variant="body1">Speciality: {appointment.doctor.speciality}</Typography>
                    {role === 'admin' && (
                        <div>
                        {appointment.status === 'taken' && appointment.takenBy && (
                            <Typography variant="body1">User: {appointment.takenBy.user.name}</Typography>
                        )}
                        <div className="li-div">
                            <Button color="primary" variant="contained" component={Link} to={`/appointments/update/${appointment._id}`}>
                            Update Appointment
                            </Button>
                        </div>
                        <div className="li-div">
                            <DeleteAppointment appointmentId={appointment._id}/>
                        </div>
                        </div>
                    )}
                    {role === 'patient' && appointment.status === 'available' && (
                        <ArrangeAppointmentButton appointmentId={appointment._id} />
                    )}
                    {role === 'patient' && appointment.status === 'taken' && (appointment.takenBy && appointment.takenBy.user.id === userId) && (
                        <DisarrangeAppointmentButton appointmentId={appointment._id} />
                    )}
                    </div>
                </li>
                ))}
            </ul>
        </div>
        );
};

export default ShowAllAppointments;

