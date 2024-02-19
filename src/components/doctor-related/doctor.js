import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectDoctors } from '../../controllers/doctorSlice';
import { fetchDoctors } from '../../tasks/doctorActions';
import Button from '@mui/material/Button';

const ShowDoctor = () => {
    const role = useSelector(state => state.auth.userRole);

    const dispatch = useDispatch();
    const { loading, error, data } = useSelector(selectDoctors);

    useEffect(() => {
        dispatch(fetchDoctors());
    }, [dispatch]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!data) return null;

    return (
        <div>
        <h2 className='title log'>Doctors Information</h2>
        <section className='div-log'>
            <ul className='doctor-log'>
                {data.map(doctor => (
                <li key={doctor._id}>
                    <p className='font-name'>{doctor.surname} {doctor.name}</p>
                    <p>Speciality: {doctor.speciality}</p>
                    <div className='li-div'>
                        <Link to={`/doctor/${doctor._id}`}>Show More Info</Link>
                    </div>
                    {role === 'admin' && (
                        <section>
                            <div className='li-div'>
                                <Link to={`/appointments/doctor/${doctor._id}`}>Appointments</Link>
                            </div>
                            <div className='li-div'>
                                <Button color="primary" variant="contained" component={Link} to={`/doctor/update/${doctor._id}`}>
                                    Update Doctor
                                </Button>
                                <Button color="primary" variant="contained" component={Link} to={`/appointments/create/${doctor._id}`}>
                                    New Appointment
                                </Button>
                            </div>
                        </section>
                        )}
                </li>
                ))}
            </ul>
        </section>
        <div>
            {role === 'admin' && (
                <div className='sub-title'>
                    <Button color="primary" variant="contained" href="/doctor/create">Create New Doctor</Button>
                </div>
            )}
        </div>
        </div>
    );
};

export default ShowDoctor;