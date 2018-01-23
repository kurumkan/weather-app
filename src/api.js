import axios from 'axios';

const ROOT_URL = '/api/search/'

export const getWeather = (location) => {
  if(location.city) {
    return axios.get(`${ROOT_URL}?city=${location.city}`);
  } else {
    return axios.get(`${ROOT_URL}?lat=${location.lat}&lon=${location.lon}`);
  }
};

export default {
  getWeather
};
