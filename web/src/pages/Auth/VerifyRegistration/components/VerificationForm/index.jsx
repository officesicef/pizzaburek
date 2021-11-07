import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { Form, Formik } from 'formik';
import { Link } from 'react-router-dom';

import { FormComponents } from 'src/components';
import { paths } from 'src/constants';

import useStyles from './useStyles';
import validationSchema from './validationSchema';

const VerificationForm = ({ initialValues, handleSubmit, isInvited }) => {
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
              label="Verification Code"
              type="text"
              variant="outlined"
              id="verificationCode"
              name="verificationCode"
              maxLength={36}
              trim
              error={touched.verificationCode && errors.verificationCode}
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
              error={touched.password && errors.password}
            />
          </Grid>
          <Grid item>
            <FormComponents.TextField
              className={classes.formField}
              label="Confirm Password"
              type="password"
              variant="outlined"
              id="confirmationPassword"
              name="confirmationPassword"
              maxLength={100}
              error={
                touched.confirmationPassword && errors.confirmationPassword
              }
            />
          </Grid>
          <Grid item>
            <div className={classes.loaderWrapper}>
              <Button
                className={classes.button}
                type="submit"
                variant="contained"
                color="primary"
                disableElevation
              >
                {isInvited ? 'Sign Up' : 'Next'}
              </Button>
            </div>
          </Grid>
          <Grid item container xs={12} justifyContent="center">
            <Typography variant="body2">
              Already have an account?
              <Link to={paths.LOGIN}> Sign in</Link>
            </Typography>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

VerificationForm.propTypes = {
  initialValues: PropTypes.shape({
    password: PropTypes.string,
    confirmationPassword: PropTypes.string,
    verificationCode: PropTypes.string,
  }),
  isInvited: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

VerificationForm.defaultProps = {
  initialValues: {
    password: '',
    confirmationPassword: '',
    verificationCode: '',
  },
};

export default memo(VerificationForm);
