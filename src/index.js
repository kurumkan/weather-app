import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { applyRouterMiddleware, browserHistory, Router } from 'react-router';
import { useScroll } from 'react-router-scroll';

import createRoutes from 'routes';
import configureStore from 'store';

const store = configureStore(browserHistory);
const history = syncHistoryWithStore(browserHistory, store);
const routes = createRoutes(store);

if(process.env.NODE_ENV !== 'production') {
  window.__store__ = store;
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
