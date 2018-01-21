import {
  GET_WEATHER_REQUEST,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_FAILURE
} from 'constants/actionTypes';

const initialState = {
  error: '',
  gettingData: false,
  term: '',
  weatherData: []
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WEATHER_REQUEST: {
      return {
        ...initialState,
        term: action.payload,
        gettingData: true
      };
    }

    case GET_WEATHER_SUCCESS: {
      return {
        ...state,
        gettingData: false,
        weatherData: action.payload,
      };
    }
    case GET_WEATHER_FAILURE: {
      return {
        ...state,
        gettingData: false,
        error: action.payload
      };
    }
    default: {
      return state;
    }
  }
};

export default weatherReducer;

