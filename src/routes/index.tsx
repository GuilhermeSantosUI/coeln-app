import { Routes as RRDRoutes, Route, Navigate } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import SignIn from '../pages/Sign';
import ProtectedRoutes from './ProtectedRoutes';
import PublicRoutes from './PublicRoutes';

function Routes() {
  return (
    <RRDRoutes>
      {/** Protected Routes */}
      {/** Wrap all Route under ProtectedRoutes element */}
      <Route path="/" element={<ProtectedRoutes />}>
        <Route path="/" element={<Navigate replace to="dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>

      {/** Public Routes */}
      {/** Wrap all Route under PublicRoutes element */}
      <Route path="/" element={<PublicRoutes />}>
        <Route path="/login" element={<SignIn />} />
      </Route>
    </RRDRoutes>
  );
}

export default Routes;
