import PropTypes from 'prop-types';
import React, { memo } from 'react';
import {
  AppBar,
  Avatar,
  Drawer,
  Grid,
  Hidden,
  Icon,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { NavLink } from 'react-router-dom';

import { paths } from 'src/constants';

import logo from 'src/assets/logo_vertical.svg';

import NavigationList from '../NavigationList';

import useStyles from './useStyles';

const Mobile = ({
  children,
  handleDrawerClose,
  handleDrawerOpen,
  handleOpenUserMenu,
  isDrawerOpened,
  user,
}) => {
  const classes = useStyles();

  return (
    <Hidden smUp>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <div className={classes.headerContainer}>
            <div className={classes.mainContainer}>
              <Hidden smUp>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                >
                  <Icon>menu</Icon>
                </IconButton>
              </Hidden>
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
              >
                LIVE
              </Typography>
              <div className={classes.avatar}>
                <Grid
                  container
                  alignItems="center"
                  onClick={handleOpenUserMenu}
                >
                  <Grid item>
                    <Icon>keyboard_arrow_down</Icon>
                  </Grid>
                  <Grid item>
                    <Avatar className={classes.userAvatar}>
                      {user && 'name' in user ? user.name[0] : ''}
                    </Avatar>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        anchor="left"
        open={isDrawerOpened}
        onClose={handleDrawerOpen}
        className={classes.navigationMenu}
        classes={{ paper: classes.navigationMenuDrawer }}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <IconButton
          onClick={handleDrawerClose}
          className={classes.closeMenuButton}
        >
          <Icon>close</Icon>
        </IconButton>
        <NavigationList />
      </Drawer>
      <div className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </div>
    </Hidden>
  );
};

Mobile.propTypes = {
  children: PropTypes.node.isRequired,
  handleDrawerClose: PropTypes.func.isRequired,
  handleDrawerOpen: PropTypes.func.isRequired,
  handleOpenUserMenu: PropTypes.func.isRequired,
  isDrawerOpened: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string,
  }),
};

Mobile.defaultProps = {
  user: undefined,
};

export default memo(Mobile);
