import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE
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

export const signupUser = () => {
  return null;
};

export const signinUser = () => {
  return null;
};