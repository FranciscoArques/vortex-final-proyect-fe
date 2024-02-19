import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginButton from './nav-bar-related/loginButton';

const PrivateRoute = ({ path, element }) => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    return (
        <Routes>

            {isAuthenticated ? (
                <Route
                path={path}
                element={element}
                />
            ) : (
                <Route exact path="/login" element={<LoginButton />} />
            )}

        </Routes>
    );
};

export default PrivateRoute;