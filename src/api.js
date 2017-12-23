import axios from 'axios';

const ROOT_URL = '/api/users/'

export const getUsers = (offset = 0, limit = 10) => {
  return axios.get(`${ROOT_URL}?offset=${offset}&limit=${limit}`);
};

export default {
  getUsers
};