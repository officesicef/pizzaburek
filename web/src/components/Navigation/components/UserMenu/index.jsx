import PropTypes from 'prop-types';
import React, { memo } from 'react';
import clsx from 'clsx';
import { Button, Grid, Popover, Typography } from '@material-ui/core';

import useStyles from './useStyles';

const UserMenu = ({
  handleCloseUserMenu,
  handleLogout,
  user,
  userMenuAnchor,
}) => {
  const classes = useStyles();

  return (
    <Popover
      open={Boolean(userMenuAnchor)}
      anchorEl={userMenuAnchor}
      onClose={handleCloseUserMenu}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
    >
      <Grid container className={classes.userMenu}>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          className={clsx(classes.userMenuItem, classes.userMenuTitle)}
        >
          <Grid item container justifyContent="center" alignItems="center">
            <Typography variant="body1">{user && user.email}</Typography>
          </Grid>
          <Grid item container justifyContent="center" alignItems="center">
            <Typography
              variant="body1"
              className={classes.header}
              noWrap
              align="center"
            >
              {user && user.name}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.userMenuItem}>
          <Button
            variant="contained"
            onClick={handleLogout}
            color="primary"
            className={classes.logoutButton}
          >
            LOGOUT
          </Button>
        </Grid>
      </Grid>
    </Popover>
  );
};

UserMenu.propTypes = {
  handleCloseUserMenu: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
  user: PropTypes.shape({ email: PropTypes.string, name: PropTypes.string }),
  userMenuAnchor: PropTypes.shape({}),
};

UserMenu.defaultProps = {
  user: undefined,
  userMenuAnchor: undefined,
};

export default memo(UserMenu);
