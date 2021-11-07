const API_PREFIX = '/api';

export default {
  AUTH_CREATE_OR_VALIDATE_USER: `${API_PREFIX}/auth/create-or-validate-user`,
  AUTH_HEALTH: `${API_PREFIX}/health`,
  AUTH_LOGIN: `${API_PREFIX}/auth/login`,
  AUTH_REGISTER: `${API_PREFIX}/auth/register`,
  AUTH_USER: `${API_PREFIX}/auth/user`,
  GENERICS_MODEL: `${API_PREFIX}/:model`,
  GENERICS_MODEL_ID: `${API_PREFIX}/:model/:id`,
  INSTITUTIONS: `${API_PREFIX}/institutions`,
  USERS: `${API_PREFIX}/users`,
  USER_INSTITUTIONS: `${API_PREFIX}/user-institutions`,
  USER_INSTITUTIONS_CHECK_OUT: `${API_PREFIX}/user-institutions/check-out`,
  USER_INSTITUTIONS_REPORT: `${API_PREFIX}/user-institutions/report`,
  USER_INSTITUTIONS_REPORTS_USER_INTERACTION: `${API_PREFIX}/user-institutions/reports-user-interaction`,

  build: (path: string, ...params: string[]): string => {
    params.reverse();
    return path.replace(/(:\w+)/g, () => params.pop() || '');
  },

  swaggerBuild: (path: string): string => {
    const matches = path.match(/(:\w+)/g);
    matches?.reverse();

    return path.replace(
      /(:\w+)/g,
      () => `{${matches?.pop()?.replace(':', '')}}`
    );
  },
};
