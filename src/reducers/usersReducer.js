import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE
} from 'constants/actionTypes';

const initialState = {
  users: [],
  currentUser: null,
  gettingUsers: true
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
    default: {
      return state;
    }
  }
};

export default usersReducer;