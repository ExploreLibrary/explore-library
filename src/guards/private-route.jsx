import { useAuth } from "../contexts/auth-context";
import { Navigate } from 'react-router'; 

function PrivateRoute({ role, children }) {
  const { user } = useAuth();
  if (user) {
    return children;
  } else {
    return <Navigate to="/login" />
  }
}

export default PrivateRoute;