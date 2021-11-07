import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { Button, CircularProgress, Grid, Typography } from '@material-ui/core';
import { Form, Formik } from 'formik';
import { Link } from 'react-router-dom';

import { FormComponents } from 'src/components';
import { paths } from 'src/constants';

import useStyles from './useStyles';
import validationSchema from './validationSchema';

const LoginForm = ({ handleSubmit, initialValues, loading }) => {
  const classes = useStyles();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => handleSubmit(values)}
    >
      {({ touched, errors }) => (
        <Form>
          <Grid item>
            <FormComponents.TextField
              className={classes.formField}
              label="Email"
              type="text"
              variant="outlined"
              id="email"
              name="email"
              maxLength={100}
              trim
              error={touched.email && errors.email}
            />
          </Grid>
          <Grid item>
            <FormComponents.TextField
              className={classes.formField}
              label="Password"
              type="password"
              variant="outlined"
              id="password"
              name="password"
              maxLength={100}
              trim
              error={touched.password && errors.password}
            />
          </Grid>
          <Grid item container xs={12} className={classes.forgotLinks}>
            <Link to="/recovery">Forgot password?</Link>
          </Grid>
          <Grid item>
            <div className={classes.loaderWrapper}>
              <Button
                className={classes.button}
                type="submit"
                variant="contained"
                color="primary"
                disabled={loading}
                disableElevation
              >
                Sign In
              </Button>
              {loading && (
                <CircularProgress
                  className={classes.buttonProgress}
                  size={34}
                />
              )}
            </div>
          </Grid>
          <Grid item container xs={12} justifyContent="center">
            <Typography variant="body2">
              Don&apos;t have an account?
              <Link to={paths.REGISTRATION}> Register</Link>
            </Typography>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.shape({
    password: PropTypes.string,
    email: PropTypes.string,
  }),
  loading: PropTypes.bool.isRequired,
};

LoginForm.defaultProps = {
  initialValues: { email: '', password: '' },
};

export default memo(LoginForm);
