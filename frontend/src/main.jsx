import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import AuthPage from './pages/AuthPage.jsx'; 
import ProtectedRoute from './components/ProtectedRoute'; 
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        {/* Set AuthPage as the default route */}
        <Route path="/" element={<AuthPage />} />
        {/* Protected route for App */}
        <Route path="/home" element={<ProtectedRoute><App /></ProtectedRoute>} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/register" element={<AuthPage />} />
      </Routes>
    </Router>
  </StrictMode>
);
