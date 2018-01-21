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

const token = localStorage.getItem('token');
if(token) {
  const userid = localStorage.getItem('userid');
  const firstName = localStorage.getItem('firstName');
  const lastName = localStorage.getItem('lastName');
  const username = localStorage.getItem('username');
  const imageUrl = localStorage.getItem('imageUrl');

  store.dispatch({ type: AUTH_USER, payload: {  userid, firstName, lastName, username, imageUrl }, meta: { remote: true } });
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);

