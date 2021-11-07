import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { Drawer, Grid, Hidden, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

import { paths } from 'src/constants';

import logo from 'src/assets/logo_vertical.svg';

import NavigationList from '../NavigationList';
import UserControls from '../UserControls';

import useStyles from './useStyles';

const Desktop = ({ children, handleOpenUserMenu, onQRCodeClick, user }) => {
  const classes = useStyles();

  return (
    <Hidden xsDown>
      <Drawer
        className={classes.navigationMenu}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <Grid
          className={classes.navigationGrid}
          container
          justifyContent="space-between"
        >
          <Grid item xs={12}>
            <NavLink to={paths.DASHBOARD}>
              <img
                className={classes.imageIconVertical}
                src={logo}
                alt="ScanIT logo"
              />
            </NavLink>
            <Typography
              variant="body1"
              className={classes.environmentName}
              noWrap
              align="center"
            >
              LIVE
            </Typography>
            <NavigationList />
          </Grid>
          <Grid item container alignItems="flex-end" justifyContent="center">
            {user && 'qrCode' in user && (
              <img
                onClick={onQRCodeClick}
                className={classes.qrImage}
                src={user.qrCode}
                alt={user.email}
              />
            )}
            <UserControls user={user} onAvatarClick={handleOpenUserMenu} />
          </Grid>
        </Grid>
      </Drawer>
      <div className={classes.content}>{children}</div>
    </Hidden>
  );
};

Desktop.propTypes = {
  children: PropTypes.node.isRequired,
  handleOpenUserMenu: PropTypes.func.isRequired,
  onQRCodeClick: PropTypes.func.isRequired,
  user: PropTypes.shape({ qrCode: PropTypes.string, email: PropTypes.string })
    .isRequired,
};

export default memo(Desktop);
