import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSpecialities } from '../tasks/specialityActions';
import { CircularProgress, List, ListItem, ListItemText } from '@mui/material';

const SpecialitiesList = () => {
    const dispatch = useDispatch();
    const { specialities, loading, error } = useSelector((state) => state.specialities);

    useEffect(() => {
        dispatch(fetchSpecialities());
    }, [dispatch]);

    if (loading) return <CircularProgress />;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h2 className='title log'>Specialities</h2>
        {specialities.map((speciality) => (
            <div className='div-log doctor-detail' key={speciality._id}>
            <h3>{speciality.speciality}:</h3>
            <List>
                {speciality.doctor.map((doctor) => (
                <ListItem key={doctor._id}>
                    <ListItemText primary={doctor.surname} secondary={doctor.name} />
                </ListItem>
                ))}
            </List>
            </div>
        ))}
        </div>
    );
};

export default SpecialitiesList;
