import * as actions from 'src/actions/actionTypes';

const defaultState = {
  notifications: [],
};

const actionMap = {
  [actions.ENQUEUE_SNACKBAR]: (state, { notification, key }) => ({
    ...state,
    notifications: [
      ...state.notifications,
      {
        key,
        ...notification,
      },
    ],
  }),

  [actions.CLOSE_SNACKBAR]: (state, { dismissAll, key }) => ({
    ...state,
    notifications: state.notifications.map((notification) =>
      dismissAll || notification.key === key
        ? { ...notification, dismissed: true }
        : { ...notification }
    ),
  }),

  [actions.REMOVE_SNACKBAR]: (state, { key }) => ({
    ...state,
    notifications: state.notifications.filter(
      (notification) => notification.key !== key
    ),
  }),
};

export default (state = defaultState, action) => {
  if (actionMap[action.type]) {
    return actionMap[action.type](state, action);
  }

  return state;
};
