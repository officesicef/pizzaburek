/* eslint-disable react/no-children-prop */
import PropTypes from 'prop-types';
import React, { memo, useCallback, useState } from 'react';
import { Box, Button, Icon } from '@material-ui/core';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import { userActions } from 'src/actions';

import { Desktop, Mobile, UserMenu } from './components';
import { ModalDialog } from '..';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
}));

const Navigation = ({ children, user, actions }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [isDialogOpened, setIsDialogOpened] = useState(false);
  const [userMenuAnchor, setUserMenuAnchor] = useState(null);

  const handleLogout = useCallback(() => actions.logout(true), [actions]);

  const handleOpenUserMenu = useCallback(
    (e) => setUserMenuAnchor(e.currentTarget),
    []
  );

  return (
    <div className={classes.root}>
      <Desktop
        children={children}
        user={user}
        onQRCodeClick={() => setIsDialogOpened(true)}
        handleOpenUserMenu={handleOpenUserMenu}
      />
      <Mobile
        children={children}
        handleDrawerClose={() => setOpen(false)}
        handleDrawerOpen={() => setOpen(true)}
        handleOpenUserMenu={handleOpenUserMenu}
        isDrawerOpened={open}
        user={user}
      />
      <UserMenu
        user={user}
        userMenuAnchor={userMenuAnchor}
        handleCloseUserMenu={() => setUserMenuAnchor(null)}
        handleLogout={handleLogout}
      />
      <ModalDialog
        handleClose={() => setIsDialogOpened(false)}
        open={isDialogOpened}
        title="QR Code"
        contentText="Post or print this QR code to enable painless signing for users."
      >
        {user && 'qrCode' in user && (
          <img
            style={{ height: '475px', width: '475px' }}
            src={user.qrCode}
            alt={user.email}
          />
        )}
        <Box display="flex" width="100%" justifyContent="center">
          <Button
            className={classes.button}
            variant="contained"
            onClick={() => console.log('Export csv')}
            startIcon={<Icon className={classes.icon}>download</Icon>}
          >
            <span className={classes.buttonsText}>Export</span>
          </Button>
        </Box>
      </ModalDialog>
    </div>
  );
};

Navigation.propTypes = {
  actions: PropTypes.shape({ logout: PropTypes.func }).isRequired,
  children: PropTypes.node.isRequired,
  user: PropTypes.shape({ qrCode: PropTypes.string, email: PropTypes.string }),
};

Navigation.defaultProps = {
  user: undefined,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

const mapDispatchToProps = (dispatch) => ({
  actions: { ...bindActionCreators(userActions, dispatch) },
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  memo
)(Navigation);
