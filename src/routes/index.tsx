import { Routes as RRDRoutes, Route, Navigate } from 'react-router-dom';
import Components from '../pages/Components';
import Component from '../pages/Components/Component';
import Item from '../pages/Items/Item';
import ItemPlugins from '../pages/Items/Plugins';
import MainPage from '../pages/MainPage';
import RequestPlugins from '../pages/Requests/Plugins';
import Request from '../pages/Requests/Request';
import SignIn from '../pages/Sign';
import Students from '../pages/Students';
import Student from '../pages/Students/Student';
import ProtectedRoutes from './ProtectedRoutes';
import PublicRoutes from './PublicRoutes';

function Routes() {
  return (
    <RRDRoutes>
      {/** Protected Routes */}
      {/** Wrap all Route under ProtectedRoutes element */}
      <Route path="/" element={<ProtectedRoutes />}>
        <Route path="/" element={<Navigate replace to="main-page" />} />
        <Route path="/main-page/:params" element={<MainPage />} />
        <Route path="/main-page" element={<MainPage />} />

        <Route path="/request/plugins/:params" element={<RequestPlugins />} />
        <Route path="/request/plugins" element={<RequestPlugins />} />
        <Route path="/request/:id" element={<Request />} />

        <Route path="/item/plugins/:params" element={<ItemPlugins />} />
        <Route path="/item/plugins" element={<ItemPlugins />} />
        <Route path="/item/:id" element={<Item />} />

        <Route path="/student/:id" element={<Student />} />
        <Route path="/students" element={<Students />} />

        <Route path="/component/:id" element={<Component />} />
        <Route path="/components" element={<Components />} />
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
