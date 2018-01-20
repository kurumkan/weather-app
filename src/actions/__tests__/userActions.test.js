import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from '../searchActions';
const mockStore = configureStore([thunk]);
const mockAxios = new MockAdapter(axios);

describe('userActions', () => {
  afterEach(function () {
    mockAxios.reset();
  });
  // describe('getUsers', () => {
  //   const { getUsers } = actions;
  //
  //   const users = [
  //     {
  //       firstName: 'john',
  //       imageUrl: 'http://someimg.jpg',
  //       lastName: 'doe',
  //       username: 'johndoe'
  //     },
  //     {
  //       firstName: 'edward',
  //       imageUrl: 'http://someimg1.jpg',
  //       lastName: 'robert',
  //       username: 'ed'
  //     },
  //     {
  //       firstName: 'nick',
  //       imageUrl: 'http://someimg3.jpg',
  //       lastName: 'natanson',
  //       username: 'nnick'
  //     }
  //   ];
  //
  //   afterEach(function () {
  //     mockAxios.reset();
  //   });
  //
  //   it('should dispatch GET_USERS_SUCCESS', () => {
  //     mockAxios.onGet(API + 'users')
  //       .reply(200, {});
  //
  //     const store = mockStore({});
  //     const expectedActions = [
  //       {
  //         type: 'GET_USERS_REQUEST',
  //       },
  //       {
  //         type: 'GET_USERS_SUCCESS',
  //         payload: users
  //       }
  //     ];
  //
  //     return store.dispatch(getUsers())
  //       .then(() => expect(store.getActions()).toBe(expectedActions));
  //   });
  // });
  describe('getUser', () => {
    const store = mockStore({});
    const { getUser } = actions;
    const user = {
      firstName: 'john',
      imageUrl: 'http://someimg.jpg',
      lastName: 'doe',
      username: 'johndoe'
    };
    it('should dispatch GET_USER_SUCCESS', () => {
      mockAxios.onGet(`/api/users/${user.username}`)
        .reply(200, { user });

      const expectedActions = [
        {
          type: 'GET_USER_REQUEST',
        },
        {
          type: 'GET_USER_SUCCESS',
          payload: user
        }
      ];
      return store.dispatch(getUser(user.username))
        .then(() => expect(store.getActions()).toEqual(expectedActions));
    });

    it('should dispatch GET_USER_FAILURE', () => {
      const store = mockStore({});
      const error = { error: 'Server error' };

      mockAxios.onGet(`/api/users/johndoe`)
        .reply(500, error);
      const expectedActions = [
        {
          type: 'GET_USER_REQUEST'
        },
        {
          type: 'GET_USER_FAILURE',
          payload: 'Cannot load the user'
        }
      ];
      return store.dispatch(getUser('johndoe'))
        .then(() => expect(store.getActions()).toEqual(expectedActions));
    });

    it('should rerender to 404 page', () => {
      jsdom.reconfigure({
        url: "http://localhost:8080"
      });
      const store = mockStore({});
      const error = { error: 'User does not exist' };
      mockAxios.onGet(`/api/users/`)
        .reply(404, error);

      const expectedActions = [
        {
          type: 'GET_USER_REQUEST'
        }
      ];
      return store.dispatch(getUser('asd'))
        .then(() => {
          expect(window.location.href).toBe('http://localhost:8080/404')
          expect(store.getActions()).toEqual(expectedActions)
        });
    });
  });
});