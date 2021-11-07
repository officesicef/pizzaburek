import PropTypes from 'prop-types';
import React, { memo } from 'react';
import {
  Grid,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';

import useStyles from './useStyles';

const CheckboxGroup = ({ items, onChange }) => {
  const classes = useStyles();

  return (
    <FormGroup className={classes.checkboxGroupContainer}>
      {items.map((item) => (
        <Grid
          key={item.id}
          item
          container
          xs={6}
          className={classes.checkboxContainer}
        >
          <FormControlLabel
            control={
              <Checkbox
                checked={item.checked}
                onChange={onChange(item.id)}
                name={item.name}
              />
            }
            label={<Typography variant="body2">{item.name}</Typography>}
          />
        </Grid>
      ))}
    </FormGroup>
  );
};

CheckboxGroup.propTypes = {
  onChange: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      checked: PropTypes.bool,
      id: PropTypes.number,
      name: PropTypes.string,
    })
  ).isRequired,
};

export default memo(CheckboxGroup);
