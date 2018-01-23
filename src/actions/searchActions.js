import browserHistory from 'browserHistory';
import {
  GET_WEATHER_REQUEST,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_FAILURE,
  CHANGE_TEMP_FORMAT
} from 'constants/actionTypes';

import api from 'api';

export const getWeatherData = (location) => (dispatch, getState) => {
  dispatch({
    type: GET_WEATHER_REQUEST
  });
  return api.getWeather(location)
    .then((res) => {
      dispatch({
        type: GET_WEATHER_SUCCESS,
        payload: res.data
      });
      browserHistory.push(`/search/${res.data.city.toLowerCase()}`);
    })
    .catch((e) => {
      dispatch({
        type: GET_WEATHER_FAILURE,
        payload: e.response.data.message
      });
    });
};

export const changeTempFormat = () => {
  return {
    type: CHANGE_TEMP_FORMAT
  };
};
