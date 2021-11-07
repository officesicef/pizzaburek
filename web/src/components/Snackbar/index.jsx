import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { IconButton, Icon } from '@material-ui/core';
import { SnackbarProvider } from 'notistack';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';

import { snackbarActions } from 'src/actions';

const Snackbar = ({ actions, children }) => {
  const dismissSnackbar = (key) => () => {
    actions.dismissSnackbar(key);
  };

  return (
    <SnackbarProvider
      action={(key) => (
        <IconButton onClick={dismissSnackbar(key)} style={{ color: 'white' }}>
          <Icon>close</Icon>
        </IconButton>
      )}
    >
      {children}
    </SnackbarProvider>
  );
};

Snackbar.propTypes = {
  actions: PropTypes.shape({ dismissSnackbar: PropTypes.func }).isRequired,
  children: PropTypes.node.isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  actions: {
    ...bindActionCreators(snackbarActions, dispatch),
  },
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  memo
)(Snackbar);
