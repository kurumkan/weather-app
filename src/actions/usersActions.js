import { browserHistory } from 'react-router';
import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  AUTH_ERROR,
  AUTH_USER,
  UNAUTH_USER,
} from 'constants/actionTypes';

import api from 'api';

export const getUsers = (offset = 0, limit = 10) => (dispatch, getState) => {
  dispatch({ type: GET_USERS_REQUEST });

  api.getUsers(offset, limit)
    .then((res) => {
      dispatch({
        type: GET_USERS_SUCCESS,
        payload: res.data.users
      });
    })
    .catch(e => {
      dispatch({
        type: GET_USERS_FAILURE,
        payload: 'Cannot load users'
      });
    });
};

export const authUser = (token, userId) => (dispatch) => {
  localStorage.setItem( 'token', token );
  localStorage.setItem( 'userid', userId );
  dispatch({ type: AUTH_USER, payload: { userId } });
  browserHistory.push('/');
};

export const signoutUser = () => (dispatch) => {
  localStorage.removeItem('token');
  localStorage.removeItem('userid');
  browserHistory.push('/');

  dispatch({ type: UNAUTH_USER });
};

export const signupUser = () => (dispatch, getState) => {
  const { firstName, lastName, username, email, password, imageUrl } = getState().form.signup.values;
  return api.signupUser({ firstName, lastName, username, email, password, imageUrl })
    .then(response => {
      const { userid, token } = response.data;
      dispatch(authUser(token, userid));
    })
    .catch(e => {
      let message = 'Sorry something went wrong';
      if(e.request.status === 422) {
        message = 'This login or password are already in use';
      }

      dispatch({
        type: AUTH_ERROR,
        payload: message
      })
    });
};

export const signinUser = () => (dispatch, getState) => {
  const { login, password } = getState().form.signin.values;
  api.signinUser({ login, password })
    .then((response) => {
      const { userid, token } = response.data;
      dispatch(authUser(token, userid));
    })
    .catch(e => {
      let message = 'Sorry something went wrong';
      if(e.request.status === 401) {
        message = 'The login or password is incorrect';
      }

      dispatch({
        type: AUTH_ERROR,
        payload: message
      })
    });
};
