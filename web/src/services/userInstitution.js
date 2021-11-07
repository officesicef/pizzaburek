import config from 'src/config';
import { http } from 'src/utils';
import { paths } from 'src/constants';

const getAccessHistory = () => http.get(paths.API.USER_INSTITUTION);

const reportUser = (data) =>
  http.post(paths.API.USER_INSTITUTIONS_REPORT, data);

const checkOutUser = (data) =>
  http.post(paths.API.USER_INSTITUTIONS_CHECK_OUT, data);

const getReports = () =>
  http.get(paths.API.USER_INSTITUTIONS_REPORTS, {
    params: { timeOffset: config.intersectionOffset },
  });

const deleteReportById = (id) =>
  http.deleteRequest(config.apiUrl + paths.build(paths.API.REPORTS_ID, id));

export default {
  checkOutUser,
  deleteReportById,
  getAccessHistory,
  getReports,
  reportUser,
};
