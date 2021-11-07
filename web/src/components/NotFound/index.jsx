import PropTypes from 'prop-types';
import React, { memo } from 'react';
import clsx from 'clsx';
import { Icon, Typography, Box } from '@material-ui/core';

import useStyles from './useStyles';

const NotFound = ({ icon, description, className }) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Icon className={clsx(classes.icon, className && className.icon)}>
        {icon}
      </Icon>
      <Typography
        variant="h5"
        className={clsx(
          classes.description,
          className && className.description
        )}
      >
        {description}
      </Typography>
    </Box>
  );
};

NotFound.propTypes = {
  icon: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  className: PropTypes.shape({
    icon: PropTypes.string,
    description: PropTypes.string,
  }),
};

NotFound.defaultProps = {
  className: {},
};

export default memo(NotFound);
