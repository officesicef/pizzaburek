import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { Button, Grid, Icon } from '@material-ui/core';
import { Form, Formik } from 'formik';

import { FormComponents } from 'src/components';

import useStyles from './useStyles';
import validationSchema from './validationSchema';

const ManualEntryForm = ({ handleSubmit, initialValues }) => {
  const classes = useStyles();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => handleSubmit(values)}
    >
      {({ touched, errors }) => (
        <Form className={classes.form}>
          <FormComponents.TextField
            name="firstName"
            label="First name"
            variant="outlined"
            noHelperSpacing
            className={classes.fields}
            autoFocus
            maxLength={50}
            error={touched.firstName && errors.firstName}
          />
          <FormComponents.TextField
            name="lastName"
            label="Last name"
            variant="outlined"
            noHelperSpacing
            className={classes.fields}
            maxLength={50}
            error={touched.lastName && errors.lastName}
          />
          <FormComponents.TextField
            name="phoneNumber"
            label="Phone number"
            variant="outlined"
            noHelperSpacing
            className={classes.fields}
            maxLength={50}
            error={touched.phoneNumber && errors.phoneNumber}
          />
          <Grid className={classes.buttonContainer}>
            <Button
              variant="contained"
              startIcon={<Icon>check</Icon>}
              type="submit"
            >
              SAVE
            </Button>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

ManualEntryForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.shape({}),
};

ManualEntryForm.defaultProps = {
  initialValues: {
    firstName: '',
    lastName: '',
    phoneNumber: '',
  },
};

export default memo(ManualEntryForm);
