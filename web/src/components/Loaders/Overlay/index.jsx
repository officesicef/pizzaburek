import PropTypes from 'prop-types';
import React, { memo } from 'react';
import clsx from 'clsx';
import { Box, Typography } from '@material-ui/core';

import logo from 'src/assets/logo_vertical.svg';

import useStyles from './useStyles';

const Overlay = ({ className }) => {
  const classes = useStyles();

  return (
    <Box className={classes.overlayLoaderContainer}>
      <img
        className={clsx(classes.logo, className)}
        src={logo}
        alt="ScanIT logo"
      />
      <Typography variant="body1">Loading...</Typography>
    </Box>
  );
};

Overlay.propTypes = {
  className: PropTypes.string,
};

Overlay.defaultProps = {
  className: '',
};

export default memo(Overlay);
