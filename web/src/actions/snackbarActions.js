import * as actions from './actionTypes';

const enqueueSnackbar = (notification) => {
  const key = notification.options && notification.options.key;

  return {
    type: actions.ENQUEUE_SNACKBAR,
    notification: {
      ...notification,
      key: key || new Date().getTime() + Math.random(),
    },
  };
};

const closeSnackbar = (key) => ({
  type: actions.CLOSE_SNACKBAR,
  dismissAll: !key,
  key,
});

const removeSnackbar = (key) => ({
  type: actions.REMOVE_SNACKBAR,
  key,
});

const successMessage = (message) =>
  enqueueSnackbar({
    message,
    options: {
      variant: 'success',
    },
  });
const warningMessage = (message) =>
  enqueueSnackbar({
    message,
    options: {
      variant: 'warning',
    },
  });
const errorMessage = (message) =>
  enqueueSnackbar({
    message,
    options: {
      variant: 'error',
    },
  });

const showSuccessMessage = (message) => (dispatch) =>
  dispatch(successMessage(message));
const showWarningMessage = (message) => (dispatch) =>
  dispatch(warningMessage(message));
const showErrorMessage = (message) => (dispatch) =>
  dispatch(errorMessage(message));
const dismissSnackbar = (key) => (dispatch) => {
  dispatch(closeSnackbar(key));
};

export default {
  enqueueSnackbar,
  closeSnackbar,
  removeSnackbar,
  successMessage,
  warningMessage,
  errorMessage,
  showSuccessMessage,
  showWarningMessage,
  showErrorMessage,
  dismissSnackbar,
};
