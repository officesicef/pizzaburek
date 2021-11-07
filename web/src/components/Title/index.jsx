import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { Typography } from '@material-ui/core';

import useStyles from './useStyles';

const Title = ({ title }) => {
  const classes = useStyles();

  return (
    <Typography variant="h3" className={classes.title}>
      {title}
    </Typography>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default memo(Title);
