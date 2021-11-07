import PropTypes from 'prop-types';
import React, { memo, useEffect, useMemo } from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';

import { userActions } from 'src/actions';

const InitProvider = ({ children, actions, user }) => {
  const isAuthenticated = useMemo(
    () => !!localStorage.getItem('accessKey'),
    []
  );

  useEffect(() => {
    const token = localStorage.getItem('accessKey');
    if (token) {
      actions.setUser(token);
    }
  }, [actions]);

  if (user || !isAuthenticated) {
    return <>{children}</>;
  }

  return null;
};

InitProvider.propTypes = {
  children: PropTypes.node.isRequired,
  actions: PropTypes.shape({
    setUser: PropTypes.func,
  }).isRequired,
  user: PropTypes.shape({}),
};

InitProvider.defaultProps = {
  user: undefined,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

const mapDispatchToProps = (dispatch) => ({
  actions: {
    ...bindActionCreators(userActions, dispatch),
  },
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  memo
)(InitProvider);
