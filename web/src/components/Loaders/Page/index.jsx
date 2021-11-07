import React, { memo } from 'react';
import clsx from 'clsx';
import { Box, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

import logo from 'src/assets/logo_vertical.svg';

import useStyles from './useStyles';

const Page = ({ className }) => {
  const classes = useStyles();

  return (
    <Box className={clsx(classes.pageLoaderContainer, className)}>
      <img className={classes.logo} src={logo} alt="ScanIT logo" />
      <Typography variant="h4" className={classes.text}>
        Loading...
      </Typography>
    </Box>
  );
};

Page.propTypes = {
  className: PropTypes.string,
};

Page.defaultProps = {
  className: null,
};

export default memo(Page);
