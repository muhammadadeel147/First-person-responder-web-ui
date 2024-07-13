// src/pages/Dashboard.jsx
import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <Container maxWidth="lg" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" component="div" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Manage Alerts
              </Typography>
              <Typography variant="body2" color="textSecondary">
                View and manage real-time alerts.
              </Typography>
              <Button component={Link} to="/manage-alerts" variant="contained" color="primary" style={{ marginTop: '1rem' }}>
                Go to Alerts
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Manage Responders
              </Typography>
              <Typography variant="body2" color="textSecondary">
                View and manage first responders.
              </Typography>
              <Button component={Link} to="/manage-responders" variant="contained" color="primary" style={{ marginTop: '1rem' }}>
                Go to Responders
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Reports
              </Typography>
              <Typography variant="body2" color="textSecondary">
                View system reports and statistics.
              </Typography>
              <Button component={Link} to="/reports" variant="contained" color="primary" style={{ marginTop: '1rem' }}>
                Go to Reports
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
