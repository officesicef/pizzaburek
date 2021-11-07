import * as actions from 'src/actions/actionTypes';

const defaultState = {
  loading: false,
  isSubmitting: false,
  user: null,
  error: '',
};

const actionMap = {
  [actions.REGISTER]: (state) => ({
    ...state,
    isSubmitting: true,
  }),
  [actions.REGISTER_SUCCESS]: (state) => ({
    ...state,
    isSubmitting: false,
  }),
  [actions.REGISTER_FAIL]: (state, { payload }) => ({
    ...state,
    isSubmitting: false,
    error: payload,
  }),

  [actions.LOGIN]: (state) => ({
    ...state,
    loading: true,
  }),
  [actions.LOGIN_SUCCESS]: (state, { payload }) => ({
    ...state,
    loading: false,
    user: payload,
  }),
  [actions.LOGIN_FAIL]: (state, { payload }) => ({
    ...state,
    loading: false,
    error: payload,
  }),

  [actions.GET_USER]: (state) => ({
    ...state,
    loading: true,
  }),
  [actions.GET_USER_SUCCESS]: (state, { payload }) => ({
    ...state,
    loading: false,
    user: payload,
  }),
  [actions.GET_USER_FAIL]: (state, { payload }) => {
    localStorage.clear();
    window.location.href = '/login';
    return {
      ...state,
      loading: false,
      error: payload,
    };
  },

  [actions.USER_UPDATE]: (state) => ({
    ...state,
    isSubmitting: true,
  }),
  [actions.USER_UPDATE_SUCCESS]: (state, { payload }) => ({
    ...state,
    isSubmitting: false,
    user: payload,
  }),
  [actions.USER_UPDATE_FAIL]: (state, { payload }) => ({
    ...state,
    isSubmitting: false,
    error: payload,
  }),

  [actions.LOGOUT]: () => defaultState,
};

export default (state = defaultState, action) => {
  if (actionMap[action.type]) {
    return actionMap[action.type](state, action);
  }

  return state;
};
