import React, { memo } from 'react';
import { List, ListItem, ListItemIcon, Icon, Badge } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';

import navigationConfiguration from './navigationConfiguration';
import useStyles from './useStyles';

const NavigationList = () => {
  const classes = useStyles();

  return (
    <List>
      {navigationConfiguration.map((navItem) => (
        <NavLink
          to={navItem.route}
          className={classes.navigationLink}
          key={navItem.title}
        >
          <ListItem button>
            <ListItemIcon>
              {navItem.showBadge ? (
                <Badge badgeContent="10+" color="error">
                  <Icon className={classes.navigationIcon}>{navItem.icon}</Icon>
                </Badge>
              ) : (
                <Icon className={classes.navigationIcon}>{navItem.icon}</Icon>
              )}
            </ListItemIcon>
            {navItem.title}
          </ListItem>
        </NavLink>
      ))}
    </List>
  );
};

NavigationList.propTypes = {};

const mapStateToProps = () => ({});

export default compose(connect(mapStateToProps), memo)(NavigationList);
