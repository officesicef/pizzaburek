import * as actions from 'src/actions/actionTypes';

const defaultState = {
  loading: false,
  data: [],
  error: '',
};

const actionMap = {
  [actions.GET_REPORTS]: (state) => ({
    ...state,
    loading: true,
  }),
  [actions.GET_REPORTS_SUCCESS]: (state, { payload }) => ({
    ...state,
    loading: false,
    data: payload,
  }),
  [actions.GET_REPORTS_FAIL]: (state, { payload }) => ({
    ...state,
    loading: false,
    error: payload,
  }),

  [actions.REPORTS_ID_DELETE_SUCCESS]: (state, { id }) => ({
    ...state,
    data: state.data.filter((report) => report.id !== id),
  }),
};

export default (state = defaultState, action) => {
  if (actionMap[action.type]) {
    return actionMap[action.type](state, action);
  }

  return state;
};
