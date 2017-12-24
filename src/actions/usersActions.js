import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  SIGNUP_ERROR
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
      console.log(e)
      dispatch({
        type: GET_USERS_FAILURE,
        payload: 'Cannot load users'
      });
    });
};

export const signupUser = () => (dispatch, getState) => {
  console.log('singup')
  const { firstName, lastName, username, email, password } = getState().form.signup.values;
  console.log(firstName)
  return api.signupUser({ firstName, lastName, username, email, password })
    .then(response => {
      const { userid, token } = response.data;
      dispatch(authUser(token, userid));
    })
    .catch(e => dispatch({
      type: SIGNUP_ERROR,
      payload: e
    }));
};

export const signinUser = () => {
  return null;
};