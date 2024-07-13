import React from 'react'
import { AppBar, Toolbar, Typography, Button, Container, Grid, Card, CardContent, CardMedia } from '@mui/material';
const Home = () => {
  return (
    <div>   
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
    <Container sx={{ mt: 4 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="140"
                                image="/path/to/image.jpg"
                                alt="First Responder"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Trained First Responder
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
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
                                image="/path/to/image.jpg"
                                alt="Emergency Alert"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Emergency Alert System
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
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
                                image="/path/to/image.jpg"
                                alt="Dispatcher"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Emergency Dispatcher
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    An emergency dispatcher can enter the location and relevant information to help the first responder.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
  </div>
  )
}

export default Home