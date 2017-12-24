import Main from 'components/Main';
import UsersListContainer from 'containers/UsersListContainer';
import SignupContainer from 'containers/SignupContainer';
import SigninContainer from 'containers/SigninContainer';
import NotFound from 'components/NotFound';
import RequireAuth from 'components/RequireAuth';

const createRoutes = (store) => {
  const routes = [
    {
      path: '/',
      component: Main,
      indexRoute: {
        onEnter: (nextState, replace) => replace({
          pathname: 'users'
        })
      },
      childRoutes: [
        {
          path: 'users',
          component: RequireAuth(UsersListContainer),
        },
        {
          path: 'signup',
          component: SignupContainer,
        },
        {
          path: 'signin',
          component: SigninContainer,
        },
        {
          path: '*',
          component: NotFound
        }
      ]
    }
  ];

  return routes;
};

export default createRoutes;