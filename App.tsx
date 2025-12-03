import React from 'react';
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Landing from './pages/Landing';
import Onboarding from './pages/Onboarding';
import Login from './pages/Login';
import Register from './pages/Register';
import StudentDashboard from './pages/StudentDashboard';
import EmployerDashboard from './pages/EmployerDashboard';
import JobDetails from './pages/JobDetails';
import CreateJob from './pages/CreateJob';
import Profile from './pages/Profile';
import Security from './pages/Security';
import Layout from './components/Layout';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        {/* Public Pages without Dashboard Layout */}
        <Route path="/" element={<Landing />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Pages with Dashboard Layout */}
        <Route path="/" element={<Layout />}>
          <Route path="student-dashboard" element={<StudentDashboard />} />
          <Route path="employer-dashboard" element={<EmployerDashboard />} />
          <Route path="jobs/:id" element={<JobDetails />} />
          <Route path="create-job" element={<CreateJob />} />
          <Route path="profile" element={<Profile />} />
          <Route path="security" element={<Security />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}