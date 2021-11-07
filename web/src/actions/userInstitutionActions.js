import { userInstitution } from 'src/services';
import { snackbarActions } from 'src/actions';

import * as actions from './actionTypes';

const getAccessHistory = () => (dispatch) => {
  dispatch({ type: actions.ACCESS_HISTORY_GET });
  userInstitution
    .getAccessHistory()
    .then((response) => {
      dispatch({
        type: actions.ACCESS_HISTORY_GET_SUCCESS,
        payload: response.data,
      });
    })
    .catch(() => dispatch({ type: actions.ACCESS_HISTORY_GET_FAIL }));
};

const reportUser = (data, historyId) => (dispatch) => {
  dispatch({ type: actions.REPORT_USER });
  userInstitution
    .reportUser(data)
    .then(() => {
      dispatch({
        type: actions.REPORT_USER_SUCCESS,
        historyId,
      });
    })
    .catch(() => dispatch({ type: actions.REPORT_USER_FAIL }));
};

const checkOutUser = (data) => (dispatch) => {
  dispatch({ type: actions.CHECKOUT_USER });
  userInstitution
    .checkOutUser(data)
    .then((response) => {
      dispatch({
        type: actions.CHECKOUT_USER_SUCCESS,
        payload: response.data,
      });
    })
    .catch(() => dispatch({ type: actions.CHECKOUT_USER_FAIL }));
};

const getReports = () => (dispatch) => {
  dispatch({ type: actions.GET_REPORTS });
  userInstitution
    .getReports()
    .then((response) => {
      dispatch({
        type: actions.GET_REPORTS_SUCCESS,
        payload: response.data,
      });
    })
    .catch(() => dispatch({ type: actions.GET_REPORTS_FAIL }));
};

const deleteReportById = (id) => (dispatch) => {
  dispatch({ type: actions.REPORTS_ID_DELETE });
  userInstitution
    .deleteReportById(id)
    .then(() => {
      dispatch({
        type: actions.REPORTS_ID_DELETE_SUCCESS,
        id,
      });
      dispatch(
        snackbarActions.successMessage(
          'Corona infection is successfully forwarded to the corresponding institutes.'
        )
      );
    })
    .catch(() => dispatch({ type: actions.REPORTS_ID_DELETE_FAIL }));
};

export default {
  checkOutUser,
  deleteReportById,
  getAccessHistory,
  getReports,
  reportUser,
};
