import Main from 'components/Main';
import UsersListContainer from 'containers/UsersListContainer';
import NotFound from 'components/NotFound/index';

const createRoutes = (store) => {
  const routes = [
    {
      path: '/',
      component: Main,
      indexRoute: {
        onEnter: (nextState, replace) => replace({
          pathname: 'pins'
        })
      },
      childRoutes: [
        {
          path: 'pins',
          component: UsersListContainer,
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