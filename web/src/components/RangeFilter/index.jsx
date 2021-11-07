import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { Grid, Slider, Typography } from '@material-ui/core';

import useStyles from './useStyles';

const RangeFilter = ({ formatDisplay, onRangeChange, range, rangeLimit }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={6}>
        <Slider
          className={classes.slider}
          classes={{ thumb: classes.thumbValueLabel }}
          max={rangeLimit}
          value={[range[0], range[1]]}
          onChange={onRangeChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          getAriaValueText={formatDisplay}
          valueLabelFormat={formatDisplay}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        className={classes.filterLabelContainer}
      >
        <Typography
          variant="body2"
          id="range-slider"
          className={classes.filterLabel}
          gutterBottom
        >
          {`${formatDisplay(range[0])} - ${formatDisplay(range[1])}`}
        </Typography>
      </Grid>
    </Grid>
  );
};

RangeFilter.propTypes = {
  formatDisplay: PropTypes.func.isRequired,
  onRangeChange: PropTypes.func.isRequired,
  range: PropTypes.arrayOf(PropTypes.number).isRequired,
  rangeLimit: PropTypes.number.isRequired,
};

export default memo(RangeFilter);
