import React from 'react';
import SignUp from './auth/SignUp';
import SignIn from './auth/Signin';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Header from './utils/Header';
import Dashboard from './pages/Dashboard/Dashboard';
import ManageAlerts from './pages/Dashboard/ManageAlerts';
import ManageResponders from './pages/Dashboard/ManageResponders';

function App() {
  const location = useLocation();
  const hideHeaderPaths = ['/signin', '/signup','/dashboard','/manage-alerts','/manage-responders'];
  return (
    <div className="App">
 {!hideHeaderPaths.includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/manage-alerts" element={<ManageAlerts/>} />
        <Route path="/manage-responders" element={<ManageResponders/>} />
   
      </Routes>
  
    </div>
  );
}

export default App;
