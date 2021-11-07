import PropTypes from 'prop-types';
import React from 'react';
import { FastField } from 'formik';
import { MenuItem, Select, InputLabel, FormControl } from '@material-ui/core';

import useStyles from './useStyles';

export const FormikSelectComponent = ({
  form: { setFieldValue },
  field: { value, name },
  getOptionLabel,
  label,
  options,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <>
      <FormControl className={classes.formControl}>
        <InputLabel id="select-label" className={classes.label}>
          {label}
        </InputLabel>
        <Select
          className={classes.select}
          {...rest}
          name={name}
          multiple
          labelId="select-label"
          value={value}
          onChange={(e) => {
            setFieldValue(name, e.target.value);
          }}
          renderValue={(selected) =>
            selected.map((selection) => getOptionLabel(selection)).join(', ')
          }
        >
          {options.map((option, index) => (
            <MenuItem value={option} key={index}>
              {getOptionLabel(option)}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

const MultipleSelectComponent = (props) => (
  <FastField component={FormikSelectComponent} {...props} />
);

FormikSelectComponent.propTypes = {
  form: PropTypes.shape({
    setFieldValue: PropTypes.func,
  }).isRequired,
  field: PropTypes.shape({ value: PropTypes.string, name: PropTypes.string })
    .isRequired,
  getOptionLabel: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MultipleSelectComponent;
