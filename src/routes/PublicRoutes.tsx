import { Navigate, Outlet } from 'react-router-dom';

function useAuth() {
  const user = localStorage.getItem('user');

  if (user) return true;

  return false;
}

function PublicRoutes() {
  const auth = useAuth();
  return auth ? <Navigate to="/main-page" /> : <Outlet />;
}

export default PublicRoutes;
