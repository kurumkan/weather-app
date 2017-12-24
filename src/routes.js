import Main from 'components/Main';
import UsersListContainer from 'containers/UsersListContainer';
import SignupContainer from 'containers/SignupContainer';
import NotFound from 'components/NotFound';

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
          component: UsersListContainer,
        },
        {
          path: 'signup',
          component: SignupContainer,
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