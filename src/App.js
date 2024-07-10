// src/App.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Card, CardContent, CardMedia } from '@mui/material';
import SignUp from './auth/SignUp';
import SignIn from './auth/Signin';

function App() {
  return (
    <div className="App">
      <SignUp/>
      <SignIn/>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            First Responder Network
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Services</Button>
          <Button color="inherit">Contact</Button>
          <Button color="inherit" variant="outlined">Join Now</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Grid container spacing={4} style={{ marginTop: '2rem' }}>
          <Grid item xs={12}>
            <Card>
              <CardMedia
                component="img"
                height="400"
                image="https://via.placeholder.com/1200x400"
                alt="First Responders"
              />
              <CardContent>
                <Typography variant="h4" component="div" gutterBottom>
                  Empowering First Responders with Advanced Communication Tools
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p">
                  Our network provides state-of-the-art communication systems to ensure first responders can perform their duties efficiently and safely.
                </Typography>
                <Button variant="contained" color="primary" style={{ marginTop: '1rem' }}>
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" component="div" gutterBottom>
              Key Features
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" component="div">
                      Feature 1
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Description of feature 1.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" component="div">
                      Feature 2
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Description of feature 2.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" component="div">
                      Feature 3
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Description of feature 3.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
          {/* Additional sections like How It Works, Testimonials, etc. */}
        </Grid>
      </Container>
    </div>
  );
}

export default App;
