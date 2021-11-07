import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';

import useStyles from './useStyles';

const InfoCard = ({ children, label }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.infoCardContainer}>
      <Paper elevation={1} className={classes.paper}>
        <Grid item xs={12}>
          {children}
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" className={classes.label}>
            {label}
          </Typography>
        </Grid>
      </Paper>
    </Grid>
  );
};

InfoCard.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
};

export default memo(InfoCard);
