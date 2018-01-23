import {
  GET_WEATHER_REQUEST,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_FAILURE,
  CHANGE_TEMP_FORMAT
} from 'constants/actionTypes';

const initialState = {
  error: '',
  gettingData: false,
  term: localStorage.getItem('term') || '',
  weatherData: [],
  tempFormat: 'C'
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WEATHER_REQUEST: {
      return {
        ...initialState,
        gettingData: true
      };
    }

    case GET_WEATHER_SUCCESS: {
      localStorage.setItem('term', action.payload.city);
      return {
        ...state,
        gettingData: false,
        weatherData: action.payload.list,
        term: action.payload.city
      };
    }
    case GET_WEATHER_FAILURE: {
      return {
        ...state,
        gettingData: false,
        error: action.payload
      };
    }
    case CHANGE_TEMP_FORMAT: {
      return {
        ...state,
        tempFormat: state.tempFormat === 'C' ? 'F' : 'C'
      };
    }
    default: {
      return state;
    }
  }
};

export default weatherReducer;

