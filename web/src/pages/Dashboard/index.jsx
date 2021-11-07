import PropTypes from 'prop-types';
import clsx from 'clsx';
import React, { memo, useCallback, useEffect } from 'react';
import {
  Icon,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  OutlinedInput,
  InputAdornment,
  Button,
  Box,
} from '@material-ui/core';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';

import { Loaders, Page } from 'src/components';
import { userInstitutionActions } from 'src/actions';

import useStyles from './useStyles';

const Dashboard = ({ accessHistory, actions, isLoading }) => {
  const classes = useStyles();

  const reportUser = useCallback(
    (userId, historyId) => actions.reportUser({ userId }, historyId),
    [actions]
  );

  const checkOutUser = useCallback(
    (historyId) => actions.checkOutUser({ historyId }),
    [actions]
  );

  useEffect(() => {
    actions.getAccessHistory();
  }, [actions]);

  if (isLoading) {
    return <Loaders.Page />;
  }

  return (
    <Page title="Dashboard">
      <Box display="flex" marginTop={2} marginBottom={2}>
        <div className={classes.search}>
          <OutlinedInput
            variant="outlined"
            className={classes.searchBar}
            id="standard-adornment-password"
            type="text"
            placeholder="Search"
            onChange={() => null}
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility">
                  <Icon>search</Icon>
                </IconButton>
              </InputAdornment>
            }
          />
        </div>
        <Button
          className={classes.button}
          variant="contained"
          onClick={() => console.log('Export csv')}
          startIcon={<Icon className={classes.icon}>download</Icon>}
        >
          <span className={classes.buttonsText}>Export</span>
        </Button>
      </Box>
      <Paper style={{ height: '800px', padding: 20 }}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Checked In</TableCell>
              <TableCell>Checked Out</TableCell>
              <TableCell />
              <TableCell />
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {accessHistory.map((row, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.user.firstName}
                </TableCell>
                <TableCell>{row.user.lastName}</TableCell>
                <TableCell>{row.user.phoneNumber}</TableCell>
                <TableCell>
                  {moment(row.checkedIn).format('DD-MM-YYYY HH:mm')}
                </TableCell>
                <TableCell>
                  {row.checkedOut
                    ? moment(row.checkedOut).format('DD-MM-YYYY HH:mm')
                    : '-'}
                </TableCell>
                <TableCell>
                  <IconButton>
                    <Icon className={classes.closeIcon}>close</Icon>
                  </IconButton>
                </TableCell>
                <TableCell>
                  <IconButton
                    disabled={row.user.report.length}
                    onClick={() => reportUser(row.user.id, row.id)}
                  >
                    <Icon
                      className={clsx(
                        classes.reportIcon,
                        row.user.report.length && classes.checkIconDisabled
                      )}
                    >
                      report
                    </Icon>
                  </IconButton>
                </TableCell>
                <TableCell>
                  <IconButton
                    disabled={row.checkedOut}
                    onClick={() => checkOutUser(row.id)}
                  >
                    <Icon
                      className={clsx(
                        classes.checkIcon,
                        row.checkedOut && classes.checkIconDisabled
                      )}
                    >
                      done_all
                    </Icon>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Page>
  );
};

Dashboard.propTypes = {
  actions: PropTypes.shape({
    getAccessHistory: PropTypes.func,
    checkOutUser: PropTypes.func,
    reportUser: PropTypes.func,
  }).isRequired,
  isLoading: PropTypes.bool.isRequired,
  accessHistory: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const mapStateToProps = (state) => ({
  isLoading: state.userInstitutions.loading,
  accessHistory: state.userInstitutions.data,
});

const mapDispatchToProps = (dispatch) => ({
  actions: { ...bindActionCreators(userInstitutionActions, dispatch) },
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  memo
)(Dashboard);
