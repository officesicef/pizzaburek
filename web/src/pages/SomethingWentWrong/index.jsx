import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { Box, Typography } from '@material-ui/core';

import useStyles from './useStyles';

const SomethingWentWrong = ({ error, errorInfo }) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Typography className={classes.title}>Something went wrong</Typography>
      <Typography>
        Please contact us on{' '}
        <a href="mailto:cevapi@najjaci.co" rel="noreferrer" target="_blank">
          cevapi@najjaci.co
        </a>{' '}
        and share details screenshot information with us.
      </Typography>
      <details className={classes.detailsContainer}>
        <Typography className={classes.error}>
          {error && error.toString()}
        </Typography>
        <Box className={classes.errorInfoContainer}>
          <Typography className={classes.errorInfo}>
            {errorInfo && errorInfo.componentStack}
          </Typography>
        </Box>
      </details>
    </Box>
  );
};

SomethingWentWrong.propTypes = {
  error: PropTypes.shape({}),
  errorInfo: PropTypes.shape({ componentStack: PropTypes.string }),
};

SomethingWentWrong.defaultProps = {
  error: null,
  errorInfo: null,
};

export default memo(SomethingWentWrong);
