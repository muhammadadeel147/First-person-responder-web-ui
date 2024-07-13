// src/App.js
import React from 'react';
import SignUp from './auth/SignUp';
import SignIn from './auth/Signin';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Header from './utils/Header';

function App() {
  const location = useLocation();
  const hideHeaderPaths = ['/signin', '/signup'];
  return (
    <div className="App">
 {!hideHeaderPaths.includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
  
    </div>
  );
}

export default App;
