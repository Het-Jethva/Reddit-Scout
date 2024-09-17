import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token'); // Check if token exists (user is logged in)

  // Redirect to login if no token is found
  if (!token) {
    return <Navigate to="/login" />;
  }

  // Otherwise, allow access to the protected content
  return children;
};

export default ProtectedRoute;
