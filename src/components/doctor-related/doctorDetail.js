import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DoctorDetail = () => {
    const { id } = useParams();
    const [doctor, setDoctor] = useState(null);

    useEffect(() => {
        const fetchDoctor = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/doctors/${id}`);
                setDoctor(response.data);
            } catch (error) {
                console.error('Error fetching doctor:', error);
            }
        };

        fetchDoctor();
    }, [id]);

    if (!doctor) return <div>Loading...</div>;

    return (
        <div className='div-log doctor-detail'>
            <h2>Doctor Detail</h2>
            <p>Surname: {doctor.doctor.surname || 'N/A'}</p>
            <p>Name: {doctor.doctor.name || 'N/A'}</p>
            <p>Age: {doctor.doctor.age || 'N/A'}</p>
            <p>Speciality: {doctor.doctor.speciality || 'N/A'}</p>
        </div>
    );
};

export default DoctorDetail;
