import axios from 'axios';

const ROOT_URL = '/api/search/'

export const getWeather = (city) => axios.get(`${ROOT_URL}?q=${city}`);
