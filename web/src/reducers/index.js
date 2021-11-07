import { combineReducers } from 'redux';

import auth from './auth';
import reports from './reports';
import snackbar from './snackbar';
import userInstitutions from './userInstitutions';

const appReducer = combineReducers({
  auth,
  reports,
  snackbar,
  userInstitutions,
});

const rootReducer = (state, action) =>
  action === 'LOGOUT'
    ? appReducer(undefined, action)
    : appReducer(state, action);

export default rootReducer;
