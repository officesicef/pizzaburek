import PropTypes from 'prop-types';
import React from 'react';
import clsx from 'clsx';
import { FastField } from 'formik';
import { TextField } from '@material-ui/core';

import useStyles from './useStyles';

const FormikTextFieldComponent = ({
  form: { setFieldValue },
  field: { value, name },
  error,
  placeholder,
  maxLength,
  min,
  trim,
  step,
  readOnly,
  noHelperSpacing,
  fieldLabelClassName,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <TextField
      className={classes.formControl}
      InputLabelProps={{
        className: clsx(classes.field, fieldLabelClassName),
      }}
      {...rest}
      name={name}
      value={value}
      inputProps={{
        className: classes.input,
        readOnly: !!readOnly,
        step: step || null,
      }}
      autoComplete="off"
      onChange={(e) => {
        if (min !== undefined) {
          if (e.target.value < min) {
            setFieldValue(name, (0).toFixed(3));
            return;
          }
        }
        if (maxLength) {
          if (e.target.value.length <= maxLength) {
            setFieldValue(name, trim ? e.target.value.trim() : e.target.value);
          } else {
            const slicedValue = e.target.value.slice(0, maxLength);
            setFieldValue(name, trim ? slicedValue.trim() : slicedValue);
          }
        } else {
          setFieldValue(name, trim ? e.target.value.trim() : e.target.value);
        }
      }}
      onBlur={() => {
        setFieldValue(name, trim ? value.trim() : value);
      }}
      placeholder={placeholder}
      error={!!error}
      helperText={error || (noHelperSpacing ? null : ' ')}
    />
  );
};

const TextFieldComponent = (props) => (
  <FastField component={FormikTextFieldComponent} {...props} />
);

FormikTextFieldComponent.propTypes = {
  form: PropTypes.shape({
    setFieldValue: PropTypes.func,
  }).isRequired,
  fieldLabelClassName: PropTypes.string,
  field: PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    name: PropTypes.string,
  }).isRequired,
  error: PropTypes.string,
  maxLength: PropTypes.number,
  min: PropTypes.number,
  noHelperSpacing: PropTypes.bool,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  step: PropTypes.number,
  trim: PropTypes.bool,
};

FormikTextFieldComponent.defaultProps = {
  error: undefined,
  maxLength: 100,
  min: 0,
  noHelperSpacing: true,
  placeholder: '',
  readOnly: false,
  step: undefined,
  trim: false,
  fieldLabelClassName: '',
};

export default TextFieldComponent;
