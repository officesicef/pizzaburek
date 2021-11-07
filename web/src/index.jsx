import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline } from '@material-ui/core';
import { Provider } from 'react-redux';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';

import appRoutes from './appRoutes';
import store from './store';
import { InitProvider, Notifier, ProtectedRoute, Snackbar } from './components';
import { history } from './utils';
import { paths } from './constants';
import { theme } from './theme';

import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history.history}>
        <InitProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Snackbar>
              <Notifier />
              <Switch>
                {appRoutes.routes.map((route) =>
                  route.component ? (
                    <Route
                      key={route.path}
                      path={route.path}
                      exact={route.exact}
                      name={route.name}
                      component={route.component}
                    />
                  ) : null
                )}
                {appRoutes.protectedRoutes.map((route) =>
                  route.component ? (
                    <ProtectedRoute
                      key={route.path}
                      path={route.path}
                      exact={route.exact}
                      name={route.name}
                      component={route.component}
                      hideMenu={route.hideMenu}
                    />
                  ) : null
                )}
                <Redirect to={paths.DASHBOARD} />
              </Switch>
            </Snackbar>
          </ThemeProvider>
        </InitProvider>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
