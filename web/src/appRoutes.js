import { Auth, Dashboard, Reports, Settings } from './pages';
import { paths } from './constants';

const routes = [
  {
    name: 'Login',
    path: paths.LOGIN,
    exact: true,
    component: Auth.Login,
  },
  {
    name: 'Registration',
    path: paths.REGISTRATION,
    exact: true,
    component: Auth.Registration,
  },
  {
    name: 'Registration Verification',
    path: paths.REGISTRATION_VERIFICATION,
    exact: true,
    component: Auth.VerifyRegistration,
  },
];

const protectedRoutes = [
  {
    name: 'Dashboard',
    path: paths.DASHBOARD,
    exact: true,
    component: Dashboard,
  },
  {
    name: 'Reports',
    path: paths.REPORTS,
    exact: true,
    component: Reports,
  },
  {
    name: 'Settings',
    path: paths.SETTINGS,
    exact: true,
    component: Settings,
  },
];

const appRoutes = {
  routes,
  protectedRoutes,
};

export default appRoutes;
