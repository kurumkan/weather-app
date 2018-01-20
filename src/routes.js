import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Main from 'components/Main';
import NotFound from 'components/NotFound';
import Search from 'containers/Search';
import WeatherInfo from 'containers/WeatherInfo';

const createRoutes = () => (
  <Main>
    <Switch>
      <Route exact path="/" component={() => <Redirect to="search" />} />
      <Route path="/search/:city" component={WeatherInfo} />
      <Route path="/search" component={Search} />
      <Route component={NotFound} />
    </Switch>
  </Main>
);

export default createRoutes;
