import PropTypes from 'prop-types';
import React from 'react';
import { FastField } from 'formik';
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
} from '@material-ui/core';

const FormikCheckbox = ({
  form: { setFieldValue },
  field: { value, name },
  label,
  error,
  style,
  ...rest
}) => (
  <FormControl component="fieldset" error={!!error}>
    <FormControlLabel
      control={
        <Checkbox
          {...rest}
          error={error}
          name={name}
          checked={value}
          style={style}
          onChange={(e, changeValue) => {
            setFieldValue(name, changeValue);
          }}
        />
      }
      label={label}
    />
    <FormHelperText>{error}</FormHelperText>
  </FormControl>
);

const CheckboxComponent = (props) => (
  <FastField component={FormikCheckbox} {...props} />
);

FormikCheckbox.propTypes = {
  form: PropTypes.shape({
    setFieldValue: PropTypes.func,
  }).isRequired,
  field: PropTypes.shape({ value: PropTypes.bool, name: PropTypes.string })
    .isRequired,
  error: PropTypes.string,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  style: PropTypes.shape({}),
};

FormikCheckbox.defaultProps = {
  style: {},
  onChange: () => {},
  error: undefined,
};

export default CheckboxComponent;
