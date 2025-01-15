import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Import Navigate here
import LoginPage from './components/Login/Login';
import DashboardPage from './components/Dashboard/DashboardPage';

const App = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        {/* <Route path="/" element={isLoggedIn ? <DashboardPage /> : <Navigate to="/dashboard" />} /> */}
        <Route path="/dashboard" element={isLoggedIn ? <DashboardPage /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
