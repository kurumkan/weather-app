import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { applyRouterMiddleware, browserHistory, Router } from 'react-router';
import { useScroll } from 'react-router-scroll';
import 'global-styles.css';

import createRoutes from 'routes';
import configureStore from 'store';

import { AUTH_USER } from 'constants/actionTypes';

export const store = configureStore(browserHistory);
const history = syncHistoryWithStore(browserHistory, store);
const routes = createRoutes(store);

if(process.env.NODE_ENV !== 'production') {
  window.__store__ = store;
}

const token = localStorage.getItem('token');
if(token) {
  const userid = localStorage.getItem('userid');
  const firstName = localStorage.getItem('firstName');
  const lastName = localStorage.getItem('lastName');
  const username = localStorage.getItem('username');
  const imageUrl = localStorage.getItem('imageUrl');

  store.dispatch({ type: AUTH_USER, payload: {  userid, firstName, lastName, username, imageUrl } });
}

ReactDOM.render(
  <Provider store={store}>
    <Router
     routes={routes}
      history={history}
      render={applyRouterMiddleware(useScroll())}
    />
  </Provider>,
  document.getElementById('app')
);
