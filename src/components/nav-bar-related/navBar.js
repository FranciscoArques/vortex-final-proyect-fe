import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import LogoffButton from './logoffButton';

export default function ButtonAppBar() {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const role = useSelector(state => state.auth.userRole);
    const userId = useSelector(state => state.auth.userId);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ backgroundColor: "#033500" }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleClick}
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose} component={Link} to="/doctor">Doctors</MenuItem>
                        <MenuItem onClick={handleClose} component={Link} to="/speciality">Specialities</MenuItem>
                        <MenuItem onClick={handleClose} component={Link} to="/appointment">Appointment</MenuItem>
                        <div>
                            { role === 'patient' && (
                            <MenuItem onClick={handleClose} component={Link} to={`/patient/${userId}`}>Patient</MenuItem>
                            )}
                        </div>

                    </Menu>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Button color="inherit" href="/">Appointments App</Button>
                    </Typography>
                    <div>
                        {isAuthenticated ? (
                            <LogoffButton />
                        ) : (
                            <Button color="inherit" href="/login">Login</Button>
                        )}
                    </div>
                    <Button color="inherit" href="/register">Register</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
