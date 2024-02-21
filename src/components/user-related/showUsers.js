import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { fetchUsers } from '../../tasks/showUsersActions';
import { selectUsers } from '../../controllers/showUsersSlice'
import { CircularProgress, List, ListItem, ListItemText, Button } from '@mui/material';

const UserList = () => {
    const getToken = JSON.parse(localStorage.getItem('token'));
    const token = getToken.token;
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    const dispatch = useDispatch();
    const { loading, error, data } = useSelector(selectUsers);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    if (loading) {
        return <CircularProgress />;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h2 className="title log">Users</h2>
            <div className="doctor-detail">
                <List>
                    { data.filter(user => user.role === 'patient').map(user => (
                    <ListItem key={user._id}>
                        <ListItemText primary={`${user.name}`} />
                        <ListItemText primary={`${user.email}`} />
                        <ListItemText primary={`Age: ${user.age}`} />
                        <Button component={Link} to={`/patient/${user._id}`} primary='primary'>Appointments</Button>
                    </ListItem>
                    ))}
                </List>
            </div>
        </div>
    );
};

export default UserList;
