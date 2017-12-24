import axios from 'axios';

const ROOT_URL = '/api/users/'

export const getUsers = (offset = 0, limit = 10) => axios.get(`${ROOT_URL}?offset=${offset}&limit=${limit}`);

export const signupUser = data => axios.post('/api/auth/signup', data);

export const signinUser = data => axios.post('/api/auth/signup', data);

export default {
  getUsers,
  signupUser,
  signinUser
};