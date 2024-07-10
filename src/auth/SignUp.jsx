// src/auth/SignUp.jsx
import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'; // Ensure this path is correct

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
      setError(error.message);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Typography component="h1" variant="h5">Sign Up</Typography>
      {error && <Typography color="error">{error}</Typography>}
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        label="Email Address"
        autoComplete="email"
        autoFocus
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        label="Password"
        type="password"
        autoComplete="current-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        fullWidth
        variant="contained"
        color="primary"
        onClick={handleSignUp}
      >
        Sign Up
      </Button>
    </Container>
  );
};

export default SignUp;
