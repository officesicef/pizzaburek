import * as axios from 'axios';

import { history } from 'src/utils';
import { paths } from 'src/constants';

const getBearerToken = () => `Bearer ${localStorage.getItem('accessKey')}`;

const combineOptions = (options) => {
  const accessKey = localStorage.getItem('accessKey');
  return accessKey
    ? {
        ...options,
        headers: {
          ...(options && 'headers' in options ? options.headers : {}),
          Authorization: getBearerToken(),
        },
      }
    : {};
};

const forceLogout = () => {
  localStorage.removeItem('accessKey');
  history.push(paths.LOGIN);
};

const get = (path, options) =>
  axios.get(path, combineOptions(options)).catch((error) => {
    if (error.response.status === 401) {
      forceLogout();
    } else {
      throw error;
    }
  });

const post = (path, body, options) =>
  axios.post(path, body, combineOptions(options)).catch((error) => {
    if (error.response.status === 401) {
      forceLogout();
    } else {
      throw error;
    }
  });

const deleteRequest = (path, options) =>
  axios.delete(path, combineOptions(options)).catch((error) => {
    if (error.response.status === 401) {
      forceLogout();
    } else {
      throw error;
    }
  });

const uploadFile = (file, signedUrl, fileName, progressCallback) => {
  const cancelTokenSource = axios.CancelToken.source();
  return {
    cancelToken: cancelTokenSource,
    promise: axios.put(signedUrl, file, {
      headers: {
        'Content-Type': file.type,
      },
      onUploadProgress: (progress) => {
        progressCallback(progress, fileName);
      },
      cancelToken: cancelTokenSource.token,
    }),
  };
};

export default {
  deleteRequest,
  get,
  post,
  uploadFile,
};
