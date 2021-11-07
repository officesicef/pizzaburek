import PropTypes from 'prop-types';
import React, { memo, useEffect, useCallback } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Icon,
  IconButton,
  OutlinedInput,
  InputAdornment,
  Box,
  Button,
} from '@material-ui/core';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Page, Loaders } from 'src/components';
import { userInstitutionActions } from 'src/actions';

import { SubTable } from './components';
import useStyles from './useStyles';

const Reports = ({ reports, isLoading, actions }) => {
  const classes = useStyles();

  const sendInfectionReport = useCallback(
    (id) => {
      actions.deleteReportById(id);
    },
    [actions]
  );

  useEffect(() => {
    actions.getReports();
  }, [actions]);

  if (isLoading) {
    return <Loaders.Page />;
  }

  return (
    <Page title="Reports">
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
              <TableCell />
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Reported At</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reports.map((row, index) => (
              <SubTable
                key={index}
                row={row}
                sendInfectionReport={sendInfectionReport}
              />
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Page>
  );
};

Reports.propTypes = {
  actions: PropTypes.shape({
    getReports: PropTypes.func,
    deleteReportById: PropTypes.func,
  }).isRequired,
  isLoading: PropTypes.bool.isRequired,
  reports: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const mapStateToProps = (state) => ({
  isLoading: state.reports.loading,
  reports: state.reports.data,
});

const mapDispatchToProps = (dispatch) => ({
  actions: { ...bindActionCreators(userInstitutionActions, dispatch) },
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  memo
)(Reports);
