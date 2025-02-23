import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import JobListings from './pages/JobListings';
import JobDetail from './pages/JobDetail';
import FreelancerProfile from './pages/FreelancerProfile';
import EmployerProfile from './pages/EmployerProfile';
import Application from './pages/Application';
import Dashboard from './pages/Dashboard';
import Payment from './pages/Payment';
import Notifications from './pages/Notifications';
import Settings from './pages/Settings';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="h-screen w-full bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/jobs" element={<JobListings />} />
            <Route path="/jobs/:id" element={<JobDetail />} />
            <Route path="/freelancer/:id" element={<FreelancerProfile />} />
            <Route path="/employer/:id" element={<EmployerProfile />} />
            <Route path="/apply/:id" element={<Application />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/payments" element={<Payment />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;