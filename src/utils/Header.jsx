// src/utils/Header.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    const handleSignUpClick = () => {
        navigate('/signup');
    };

    const handleSignInClick = () => {
        navigate('/signin');
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    First Responder Network
                </Typography>
                <Button color="inherit">Home</Button>
                <Button color="inherit">About</Button>
                <Button color="inherit">Services</Button>
                <Button color="inherit">Contact</Button>
                <Button color="inherit" variant="outlined" onClick={handleSignUpClick}>Sign Up</Button>
                <Button color="inherit" variant="outlined" onClick={handleSignInClick}>Sign In</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;