import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  UPDATE_USERS_STATUS
} from 'constants/actionTypes';

const initialState = {
  users: [],
  currentUser: {},
  gettingUsers: false,
  gettingAUser: false,
  usersOnline: {}
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_REQUEST: {
      return {
        ...state,
        gettingUsers: true
      };
    }

    case GET_USERS_SUCCESS: {
      return {
        ...state,
        users:  action.payload,
        gettingUsers: false
      };
    }
    case GET_USERS_FAILURE: {
      return {
        ...state,
        gettingUsers: false
      };
    }

    case GET_USER_REQUEST: {
      return {
        ...state,
        gettingAUser: true
      };
    }

    case GET_USER_SUCCESS: {
      return {
        ...state,
        currentUser:  action.payload,
        gettingAUser: false
      };
    }
    case GET_USER_FAILURE: {
      return {
        ...state,
        gettingAUser: false
      };
    }
    case UPDATE_USERS_STATUS: {
      return {...state, usersOnline: action.payload}
    }
    default: {
      return state;
    }
  }
};

export default usersReducer;