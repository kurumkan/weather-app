import {
  GET_WEATHER_REQUEST,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_FAILURE
} from 'constants/actionTypes';

const initialState = {
  term: ''
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WEATHER_REQUEST: {
      return {
        ...state,
        gettingUsers: true
      };
    }

    case GET_WEATHER_SUCCESS: {
      return {
        ...state,
        users: action.payload,
        gettingUsers: false
      };
    }
    case GET_WEATHER_FAILURE: {
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

export default weatherReducer;

