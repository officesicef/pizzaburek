import PropTypes from 'prop-types';
import React, { memo, useCallback, useMemo } from 'react';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';

import { Page } from 'src/components';
import { history } from 'src/utils';
import { userActions } from 'src/actions';

import logo from 'src/assets/logo_horizontal.svg';

import { RegistrationForm } from './components';

import useStyles from './useStyles';

const Registration = ({ actions, isSubmitting }) => {
  const classes = useStyles();

  const isAuthenticated = useMemo(
    () => !!localStorage.getItem('accessKey'),
    []
  );

  const handleSubmit = useCallback((data) => actions.register(data), [actions]);

  if (isAuthenticated) {
    history.push(paths.DASHBOARD);
  }

  return (
    <div className={classes.page}>
      <Page title="Registration">
        <Card className={classes.formCard}>
          <CardContent>
            <Grid
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <Grid item>
                <img
                  className={classes.imageIcon}
                  src={logo}
                  alt="ScanIT logo"
                />
              </Grid>
              <Grid item>
                <Typography variant="h4" className={classes.title}>
                  Registration
                </Typography>
              </Grid>
              <RegistrationForm
                handleSubmit={handleSubmit}
                isSubmitting={isSubmitting}
              />
            </Grid>
          </CardContent>
        </Card>
      </Page>
    </div>
  );
};

Registration.propTypes = {
  actions: PropTypes.shape({ register: PropTypes.func }).isRequired,
  isSubmitting: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isSubmitting: state.auth.isSubmitting,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(userActions, dispatch),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  memo
)(Registration);
