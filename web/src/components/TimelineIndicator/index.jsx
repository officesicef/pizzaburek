import PropTypes from 'prop-types';
import React, { memo } from 'react';

import useStyles from './useStyles';

const TimelineIndicator = ({ handleTimelineClick, currentPosition }) => {
  const classes = useStyles();

  return (
    <div className={classes.timelineContainer}>
      <div onClick={handleTimelineClick} role="button" tabIndex="-1">
        <div
          className={classes.currentTime}
          style={{ marginLeft: `${currentPosition}%` }}
        />
      </div>
    </div>
  );
};

TimelineIndicator.propTypes = {
  currentPosition: PropTypes.number.isRequired,
  handleTimelineClick: PropTypes.func.isRequired,
};

export default memo(TimelineIndicator);
