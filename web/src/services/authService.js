import { history, http } from 'src/utils';
import { paths } from 'src/constants';

const logout = () => {
  localStorage.removeItem('accessKey');
  history.push(paths.LOGIN);
};

const login = (data) => http.post(paths.API.LOGIN, data);

const getUser = () => http.get(paths.API.USER);

const register = (data) => http.post(paths.API.REGISTER, data);

const verifyRegistration = (data) =>
  http.post(paths.API.REGISTRATION_VERIFICATION, data);

const updateUser = (id, data) => http.put(paths.API.USER_ID, data);

export default {
  getUser,
  login,
  logout,
  register,
  updateUser,
  verifyRegistration,
};
