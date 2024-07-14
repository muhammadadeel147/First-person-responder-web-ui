import React from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
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
              <Button component={Link} to="/signup" variant="contained" color="primary" style={{ marginTop: '1rem' }}>
                Join Now
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
                <CardMedia
                  component="img"
                  height="140"
                  image="https://via.placeholder.com/300x140"
                  alt="Real-Time Alerts"
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    Real-Time Alerts
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Instant notifications to First Responders in the vicinity of an emergency.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://via.placeholder.com/300x140"
                  alt="Integrated Communication"
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    Integrated Communication
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Seamless communication between dispatchers and First Responders.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://via.placeholder.com/300x140"
                  alt="Volunteer Network"
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    Volunteer Network
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    A large network of trained volunteers ready to respond to emergencies.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://via.placeholder.com/300x140"
                  alt="Volunteer Network"
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                  Trained First Responder
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                  A trained first responder can provide immediate basic life support techniques before professional help arrives.
                           
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://via.placeholder.com/300x140"
                  alt="Real-Time Alerts"
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                  Emergency Alert System
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                  An integrated watch, mobile, and text alert system that notifies trained volunteer first responders of emergencies.
                        
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://via.placeholder.com/300x140"
                  alt="Integrated Communication"
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                  Emergency Dispatcher
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                  An emergency dispatcher can enter the location and relevant information to help the first responder.
                            
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            
          
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" component="div" gutterBottom>
            How It Works
          </Typography>
          <Card>
            <CardMedia
              component="img"
              height="300"
              image="https://via.placeholder.com/1200x300"
              alt="How It Works"
            />
            <CardContent>
              <Typography variant="body1" color="textSecondary" component="p">
                In the event of an emergency, dispatchers input the location and details into our system. This information is then pushed out to nearby First Responders through mobile and text alerts, ensuring a quick and efficient response.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" component="div" gutterBottom>
            Testimonials
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://via.placeholder.com/300x140"
                  alt="Testimonial John Doe"
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    John Doe, Volunteer
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    "This system has significantly improved my ability to respond to emergencies. The real-time alerts and integrated communication make a huge difference."
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://via.placeholder.com/300x140"
                  alt="Testimonial Jane Smith"
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    Jane Smith, Dispatcher
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    "The First Responder Network has made it easier for us to manage emergencies and ensure that help arrives quickly."
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
