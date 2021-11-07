import * as actions from 'src/actions/actionTypes';

const defaultState = {
  loading: false,
  data: [],
  error: '',
};

const actionMap = {
  [actions.ACCESS_HISTORY_GET]: (state) => ({
    ...state,
    loading: true,
  }),
  [actions.ACCESS_HISTORY_GET_SUCCESS]: (state, { payload }) => ({
    ...state,
    loading: false,
    data: payload,
  }),
  [actions.ACCESS_HISTORY_GET_FAIL]: (state, { payload }) => ({
    ...state,
    loading: false,
    error: payload,
  }),

  [actions.CHECKOUT_USER_SUCCESS]: (state, { payload }) => ({
    ...state,
    loading: false,
    data: state.data.map((history) => {
      if (history.id === payload.id) {
        return { ...history, checkedOut: payload.checkedOut };
      }
      return history;
    }),
  }),

  [actions.REPORT_USER_SUCCESS]: (state, { historyId }) => ({
    ...state,
    loading: false,
    data: state.data.map((history) => {
      if (history.id === historyId) {
        return { ...history, user: { ...history.user, report: [{}] } };
      }
      return history;
    }),
  }),
};

export default (state = defaultState, action) => {
  if (actionMap[action.type]) {
    return actionMap[action.type](state, action);
  }

  return state;
};
