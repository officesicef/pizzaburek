import PropTypes from 'prop-types';
import React from 'react';
import { FastField } from 'formik';
import {
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  FormHelperText,
} from '@material-ui/core';

import useStyles from './useStyles';

export const FormikSelectComponent = ({
  field: { value, name },
  form: { setFieldValue },
  getOptionLabel,
  label,
  onChange,
  options,
  error,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <>
      <FormControl className={classes.formControl} error={!!error}>
        <InputLabel id="select-label" className={classes.label}>
          {label}
        </InputLabel>
        <Select
          className={classes.select}
          {...rest}
          name={name}
          labelId="select-label"
          value={getOptionLabel(value)}
          onChange={(e) => {
            const val = options.find(
              (option) => getOptionLabel(option) === e.target.value
            );
            if (onChange) onChange(val);
            setFieldValue(name, val);
          }}
        >
          {options.map((option, index) => (
            <MenuItem value={getOptionLabel(option)} key={index}>
              {getOptionLabel(option)}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>{error}</FormHelperText>
      </FormControl>
    </>
  );
};

const SelectComponent = (props) => (
  <FastField component={FormikSelectComponent} {...props} />
);

FormikSelectComponent.propTypes = {
  form: PropTypes.shape({
    setFieldValue: PropTypes.func,
  }).isRequired,
  field: PropTypes.shape({ value: PropTypes.shape({}), name: PropTypes.string })
    .isRequired,
  getOptionLabel: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  error: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

FormikSelectComponent.defaultProps = {
  onChange: undefined,
  error: undefined,
};

export default SelectComponent;
