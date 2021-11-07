import { get as _get } from 'lodash';

import { statusCodes } from 'src/constants';

export default () => (_store) => (next) => (action) => {
  const status = _get(action, 'error.response.status');
  if (
    [
      statusCodes.BAD_REQUEST,
      statusCodes.INTERNAL_SERVER_ERROR,
      statusCodes.NOT_FOUND,
    ].includes(status)
  ) {
    window.location.href = '/';
  }

  return next(action);
};
