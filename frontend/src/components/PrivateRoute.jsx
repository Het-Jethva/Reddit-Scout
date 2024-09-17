import { useRecoilValue } from 'recoil';
import { authState } from '../atoms/authAtom';
import { Redirect } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const auth = useRecoilValue(authState);

  // If user is not authenticated, redirect to login
  if (!auth.isAuthenticated) {
    return <Redirect to="/login" />;
  }

  // Else render the children (protected components)
  return children;
};

export default PrivateRoute;
