import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { Box } from '@material-ui/core';

import useStyles from './useStyles';

const TabPanel = ({ children, value, index, ...other }) => {
  const classes = useStyles();

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          {...(other.style ? { style: { overflow: 'unset' } } : {})}
          className={classes.container}
        >
          {children}
        </Box>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default memo(TabPanel);
