import React from 'react';
import { useSelector } from 'react-redux';

const HomePage = () => {
    const user = useSelector(state => state.auth);

    return (
        <div>
            {user.isAuthenticated ? (
                <div>
                    <h2 className='title log'>Welcome, {user.userName}!</h2>
                    <h2 className='title log'>Your role is: {user.userRole.toUpperCase()}</h2>
                </div>
            ) : (
                <h2 className='title log'>Welcome to the Home Page!</h2>
            )}
        </div>
    );
};

export default HomePage;
