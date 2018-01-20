import browserHistory from 'browserHistory';
import {
  GET_WEATHER_REQUEST,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_FAILURE,
} from 'constants/actionTypes';

import api from 'api';

export const getWeatherData = (city) => (dispatch, getState) => {
  dispatch({ type: GET_WEATHER_REQUEST });

  return api.getWether(city)
    .then((res) => {
      dispatch({
        type: GET_WEATHER_SUCCESS,
        payload: res.data
      });
    })
    .catch(e => {
      dispatch({
        type: GET_WEATHER_FAILURE,
        payload: 'Sorry! Something went wrong'
      });
    });
};
