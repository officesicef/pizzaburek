import PropTypes from 'prop-types';
import React, { memo, useCallback, useMemo } from 'react';
import { Card, CardContent, Grid } from '@material-ui/core';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';

import { Page } from 'src/components';
import { history } from 'src/utils';
import { userActions } from 'src/actions';

import logo from 'src/assets/logo_horizontal.svg';

import { LoginForm } from './components';

import useStyles from './useStyles';

const Login = ({ actions, loading }) => {
  const classes = useStyles();

  const handleSubmit = useCallback(
    (values) => actions.login(values),
    [actions]
  );

  const isAuthenticated = useMemo(
    () => !!localStorage.getItem('accessKey'),
    []
  );

  if (isAuthenticated) {
    history.push(paths.DASHBOARD);
  }

  return (
    <div className={classes.page}>
      <Page title="Login">
        <Card className={classes.formCard}>
          <CardContent>
            <Grid
              container
              spacing={3}
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
              <LoginForm loading={loading} handleSubmit={handleSubmit} />
            </Grid>
          </CardContent>
        </Card>
      </Page>
    </div>
  );
};

Login.propTypes = {
  loading: PropTypes.bool.isRequired,
  actions: PropTypes.shape({
    login: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(userActions, dispatch),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  memo
)(Login);
