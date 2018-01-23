import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router } from 'react-router-dom';

import createRoutes from 'routes';
import './styles/global-styles.scss';

import configureStore from 'store';
import browserHistory from 'browserHistory';
import { AUTH_USER } from 'constants/actionTypes';

export const store = configureStore(browserHistory);
const history = syncHistoryWithStore(browserHistory, store);
export const routes = createRoutes(store);

if(process.env.NODE_ENV !== 'production') {
  window.__store__ = store;
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);

