import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Main from 'components/Main';
import UsersListContainer from 'containers/UsersListContainer';
import ProfileContainer from 'containers/ProfileContainer';
import SignupContainer from 'containers/SignupContainer';
import SigninContainer from 'containers/SigninContainer';
import ProfileEditContainer from 'containers/ProfileEditContainer';
import NotFound from 'components/NotFound';
import RequireAuth from 'components/RequireAuth';

const createRoutes = (store) => (
  <Main>
    <Switch>
      <Route exact path="/" component={() => <Redirect to="users"/>} />
      <Route path="/users/:username/edit" component={RequireAuth(ProfileEditContainer)} />
      <Route path="/users/:username" component={RequireAuth(ProfileContainer)} />
      <Route path="/users" component={RequireAuth(UsersListContainer)} />
      <Route path="/signup" component={SignupContainer} />
      <Route path="/signin" component={SigninContainer} />
      <Route component={NotFound} />
    </Switch>
  </Main>
);

export default createRoutes;