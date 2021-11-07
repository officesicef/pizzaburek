import config from 'src/config';

export default {
  LOGIN: '/login',
  DASHBOARD: '/dashboard',
  REPORTS: '/reports',
  SETTINGS: '/settings',
  REGISTRATION: '/registration',
  REGISTRATION_VERIFICATION: '/registration/verify',

  API: {
    LOGIN: `${config.apiUrl}/auth/login`,
    REGISTER: `${config.apiUrl}/auth/register`,
    REGISTRATION_VERIFICATION: `${config.apiUrl}/auth/verify`,
    USER_INSTITUTION: `${config.apiUrl}/user-institutions`,
    USER_INSTITUTIONS_CHECK_OUT: `${config.apiUrl}/user-institutions/check-out`,
    USER_INSTITUTIONS_REPORT: `${config.apiUrl}/user-institutions/report`,
    USER_INSTITUTIONS_REPORTS: `${config.apiUrl}/user-institutions/reports-user-interaction`,
    REPORTS_ID: '/reports/:id',
    USER: `${config.apiUrl}/auth/user`,
    USER_ID: `${config.apiUrl}/user/:id`,
  },

  build: (path, ...params) => path.replace(/(:\w+)/g, params.unshift()),
};
