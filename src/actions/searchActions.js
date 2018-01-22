import browserHistory from 'browserHistory';
import {
  GET_WEATHER_REQUEST,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_FAILURE,
  CHANGE_TEMP_FORMAT
} from 'constants/actionTypes';

import api from 'api';

export const getWeatherData = (city) => (dispatch, getState) => {
  dispatch({
    type: GET_WEATHER_REQUEST,
    payload: city
  });
  return api.getWeather(city)
    .then((res) => {
      dispatch({
        type: GET_WEATHER_SUCCESS,
        payload: res.data
      });
      browserHistory.push(`/search/${city}`);
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
