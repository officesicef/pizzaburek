import * as jwt from 'jwt-decode';

import { authService } from 'src/services';
import { history } from 'src/utils';
import { paths } from 'src/constants';
import { snackbarActions } from 'src/actions';

import * as actions from './actionTypes';

const getUser = () => (dispatch) => {
  dispatch({ type: actions.GET_USER });
  authService
    .getUser()
    .then((response) => {
      dispatch({
        type: actions.GET_USER_SUCCESS,
        payload: response.data,
      });
    })
    .catch(() => dispatch({ type: actions.GET_USER_FAIL }));
};

const register = (data) => (dispatch) => {
  dispatch({ type: actions.REGISTER });
  authService
    .register(data)
    .then((response) => {
      localStorage.setItem('accessKey', response.data.accessKey);
      dispatch({
        type: actions.REGISTER_SUCCESS,
      });
      history.push(paths.DASHBOARD);
    })
    .then(() => dispatch(getUser()))
    .catch((error) => {
      if (error.response.status === 401 || error.response.status === 400) {
        dispatch(
          snackbarActions.errorMessage(
            'Unable to register user with provided information.'
          )
        );
      }
      dispatch({
        type: actions.REGISTER_FAIL,
        payload: 'Unable to register user with provided information.',
      });
    });
};

const login = (data) => (dispatch) => {
  dispatch({ type: actions.LOGIN, payload: { loading: true } });
  authService
    .login(data)
    .then((response) => {
      const claims = jwt(response.data.accessKey);
      localStorage.setItem('accessKey', response.data.accessKey);
      dispatch({
        type: actions.LOGIN_SUCCESS,
        payload: { username: claims.username },
      });
      history.push(paths.DASHBOARD);
    })
    .then(() => dispatch(getUser()))
    .catch((error) => {
      if (error.response.status === 400) {
        dispatch(
          snackbarActions.errorMessage('Email or password is incorrect')
        );
      }
      dispatch({ type: actions.LOGIN_FAIL, payload: 'Error logging in.' });
    });
};

const logout = (isVoluntary) => (dispatch) => {
  localStorage.clear();
  authService.logout();
  if (isVoluntary)
    dispatch(
      snackbarActions.successMessage('You have successfully logged out.')
    );
  dispatch({ type: actions.LOGOUT });
};

const setUser = (token) => (dispatch) => {
  try {
    jwt(token);
  } catch (e) {
    logout(false)(dispatch);
    return;
  }
  localStorage.setItem('accessKey', token);
  dispatch(getUser());
};

export default {
  getUser,
  login,
  logout,
  register,
  setUser,
};
