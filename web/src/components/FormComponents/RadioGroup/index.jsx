import PropTypes from 'prop-types';
import React from 'react';
import { FastField } from 'formik';
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  Radio,
  RadioGroup,
} from '@material-ui/core';

const FormikRadioGroup = ({
  form: { setFieldValue },
  field: { value, name },
  error,
  options,
  ...rest
}) => (
  <FormControl component="fieldset" error={!!error}>
    <FormHelperText>{error}</FormHelperText>
    <RadioGroup
      {...rest}
      name={name}
      onChange={(e, changeValue) => {
        setFieldValue(name, changeValue);
      }}
    >
      {options.map((option, index) => (
        <FormControlLabel
          key={index}
          value={option.value}
          control={<Radio color="primary" checked={value === option.value} />}
          label={option.label}
          labelPlacement="end"
        />
      ))}
    </RadioGroup>
  </FormControl>
);

const RadioGroupComponent = (props) => (
  <FastField component={FormikRadioGroup} {...props} />
);

FormikRadioGroup.propTypes = {
  form: PropTypes.shape({
    setFieldValue: PropTypes.func,
  }).isRequired,
  field: PropTypes.shape({ value: PropTypes.string, name: PropTypes.string })
    .isRequired,
  error: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})])
  ).isRequired,
};

FormikRadioGroup.defaultProps = {
  error: undefined,
};

export default RadioGroupComponent;
