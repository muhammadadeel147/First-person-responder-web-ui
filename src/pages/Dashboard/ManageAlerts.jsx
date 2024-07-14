import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Card, CardContent, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { Link } from 'react-router-dom';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import { green, amber, red } from '@mui/material/colors';
import { db } from '../../firebase'; 
import { collection, addDoc, onSnapshot, query, orderBy } from 'firebase/firestore';

const ManageAlerts = () => {
  const [openAlertDialog, setOpenAlertDialog] = useState(false);
  const [location, setLocation] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [severity, setSeverity] = useState('');
  const [alerts, setAlerts] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const alert = { location, symptoms, severity, timestamp: new Date() };
    await addDoc(collection(db, 'alerts'), alert);
    handleCloseAlertDialog(); 
  };

  useEffect(() => {
    const q = query(collection(db, 'alerts'), orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setAlerts(snapshot.docs.map(doc => doc.data()));
    });
    return () => unsubscribe();
  }, []);

  const handleOpenAlertDialog = () => {
    setOpenAlertDialog(true);
  };

  const handleCloseAlertDialog = () => {
    setOpenAlertDialog(false);
  };

  const getSeverityColor = (severity) => {
    switch (severity.toLowerCase()) {
      case 'high':
        return red[500];
      case 'medium':
        return amber[500];
      case 'low':
        return green[500];
      default:
        return 'inherit';
    }
  };

  const handleLocationClick = (location) => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`, '_blank');
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" component="div" gutterBottom>
        Manage Alerts
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div" style={{ marginBottom: '1rem', color: 'red' }}>
                Create New Alert
              </Typography>
              <Button
                onClick={handleOpenAlertDialog}
                variant="contained"
                color="primary"
                startIcon={<AddAlertIcon />}
                sx={{ textTransform: 'none' }}
              >
                Create Alert
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div" style={{ marginBottom: '1rem', color: 'red' }}>
                Alert List
              </Typography>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell>Location</TableCell>
                      <TableCell>Description</TableCell>
                      <TableCell>Severity</TableCell>
                      <TableCell>Created At</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {alerts.map((alert, index) => (
                      <TableRow key={index}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>
                          <Button
                            variant="text"
                            color="primary"
                            onClick={() => handleLocationClick(alert.location)}
                            style={{ textTransform: 'none', textDecoration: 'underline', cursor: 'pointer' }}
                          >
                            {alert.location}
                          </Button>
                        </TableCell>
                        <TableCell>{alert.symptoms}</TableCell>
                        <TableCell>
                          <span
                            style={{
                              backgroundColor: getSeverityColor(alert.severity),
                              color: 'white',
                              padding: '4px 8px',
                              borderRadius: '4px',
                              textTransform: 'capitalize',
                            }}
                          >
                            {alert.severity}
                          </span>
                        </TableCell>
                        <TableCell>{alert.timestamp.toDate().toLocaleString()}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Dialog open={openAlertDialog} onClose={handleCloseAlertDialog}>
        <DialogTitle>Create New Alert</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="location"
            name="location"
            label="Location"
            fullWidth
            variant="outlined"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <TextField
            margin="dense"
            id="description"
            name="description"
            label="Description"
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
          />
          <FormControl fullWidth variant="outlined" margin="dense">
            <InputLabel id="severity-label">Severity</InputLabel>
            <Select
              labelId="severity-label"
              id="severity"
              value={severity}
              onChange={(e) => setSeverity(e.target.value)}
              label="Severity"
            >
              <MenuItem value="High">High</MenuItem>
              <MenuItem value="Medium">Medium</MenuItem>
              <MenuItem value="Low">Low</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAlertDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default ManageAlerts;
