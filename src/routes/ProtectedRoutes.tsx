import { Navigate, Outlet } from 'react-router-dom';

function useAuth() {
  const user = localStorage.getItem('user');

  if (user) return true;

  return false;
}

function ProtectedRoutes() {
  const auth = useAuth();
  return auth ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoutes;
