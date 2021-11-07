/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { memo } from 'react';
import { Button, CircularProgress, Grid, Typography } from '@material-ui/core';
import { Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { FormComponents } from 'src/components';
import { paths } from 'src/constants';

import useStyles from './useStyles';
import validationSchema from './validationSchema';

const RegistrationForm = ({ handleSubmit, initialValues, isSubmitting }) => {
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
              autoFocus
              type="text"
              variant="outlined"
              id="email"
              name="email"
              maxLength={50}
              trim
              error={touched.email && errors.email}
            />
          </Grid>
          <Grid item>
            <FormComponents.TextField
              className={classes.formField}
              label="Organization Name"
              type="text"
              variant="outlined"
              id="name"
              name="name"
              maxLength={50}
              error={touched.name && errors.name}
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
              maxLength={50}
              error={touched.password && errors.password}
            />
          </Grid>
          <Grid item container justifyContent="center" alignItems="center">
            <Grid item xs={1}>
              <FormComponents.Checkbox
                label=""
                style={
                  touched.acceptedTermsAndConditions &&
                  errors.acceptedTermsAndConditions
                    ? { color: 'red' }
                    : null
                }
                id="acceptedTermsAndConditions"
                name="acceptedTermsAndConditions"
              />
            </Grid>
            <Grid item xs={11}>
              <Typography variant="body2">
                {`Agree with `}
                <a href="#" rel="noreferrer" target="_blank">
                  Terms & Conditions
                </a>
                {' and '}
                <a href="#" rel="noreferrer" target="_blank">
                  Privacy Policy
                </a>
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <div className={classes.loaderWrapper}>
              <Button
                className={classes.button}
                type="submit"
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                disableElevation
              >
                Register
              </Button>
              {isSubmitting && (
                <CircularProgress
                  className={classes.buttonProgress}
                  size={34}
                />
              )}
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

RegistrationForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  initialValues: PropTypes.shape({
    email: PropTypes.string,
    name: PropTypes.string,
    password: PropTypes.string,
  }),
};

RegistrationForm.defaultProps = {
  initialValues: {
    email: '',
    name: '',
    password: '',
  },
};

export default memo(RegistrationForm);
