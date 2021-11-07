import PropTypes from 'prop-types';
import React, { memo, useCallback, useMemo } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { ErrorBoundary, Navigation } from 'src/components';
import { paths } from 'src/constants';

const ProtectedRoute = ({ component: Component, hideMenu, ...rest }) => {
  const isAuthenticated = useMemo(
    () => !!localStorage.getItem('accessKey'),
    []
  );

  const getComponent = useCallback(
    (routeProps) =>
      hideMenu ? (
        <Component {...routeProps} />
      ) : (
        <Navigation>
          <Component {...routeProps} />
        </Navigation>
      ),
    [hideMenu]
  );

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        isAuthenticated ? (
          <ErrorBoundary>{getComponent(routeProps)}</ErrorBoundary>
        ) : (
          <Redirect to={paths.LOGIN} />
        )
      }
    />
  );
};

ProtectedRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  hideMenu: PropTypes.bool,
};

ProtectedRoute.defaultProps = {
  hideMenu: false,
};

export default memo(ProtectedRoute);
