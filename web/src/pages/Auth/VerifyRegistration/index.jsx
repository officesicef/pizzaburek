import React, { memo, useCallback, useMemo } from 'react';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';

import { Page } from 'src/components';
import { authService } from 'src/services';
import { history } from 'src/utils';
import { paths } from 'src/constants';

import logo from 'src/assets/logo.svg';

import { VerificationForm } from './components';

import useStyles from './useStyles';

const VerifyRegistration = () => {
  const classes = useStyles();
  const email = new URLSearchParams(window.location.search).get('email');
  const verificationCode = new URLSearchParams(window.location.search).get(
    'verification_code'
  );
  const isInvited =
    new URLSearchParams(window.location.search).get('invited') === 'True';

  const isAuthenticated = useMemo(
    () => !!localStorage.getItem('accessKey'),
    []
  );

  const handleSubmit = useCallback(
    (values) =>
      authService
        .verifyRegistration({ ...values, email, isInvited })
        .then(() => {
          const destination = isInvited
            ? paths.LOGIN
            : `${
                paths.REGISTRATION_TENANT_SELECTION
              }?email=${encodeURIComponent(email)}`;
          history.push(destination);
        }),
    [email, isInvited]
  );

  if (isAuthenticated || !email) {
    history.push(paths.DASHBOARD);
  }

  return (
    <div className={classes.page}>
      <Page title="Registration Verification">
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
                <img className={classes.imageIcon} src={logo} alt="Logo" />
              </Grid>
              <Grid item container justifyContent="center" alignItems="center">
                <Typography variant="h4" className={classes.title}>
                  Verification
                </Typography>
                <Typography variant="body2" align="center">
                  Please enter verification code you received in you email and
                  set up a secure password
                </Typography>
              </Grid>
              <VerificationForm
                initialValues={{
                  password: '',
                  confirmationPassword: '',
                  verificationCode,
                }}
                handleSubmit={handleSubmit}
                isInvited={isInvited}
              />
            </Grid>
          </CardContent>
        </Card>
      </Page>
    </div>
  );
};

export default memo(VerifyRegistration);
