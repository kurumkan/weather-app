import axios from 'axios';

const ROOT_URL = '/api/users/'

export const getUsers = (offset = 0, limit = 10) => axios.get(`${ROOT_URL}?offset=${offset}&limit=${limit}`);

export const getUser = (userid) => axios.get(`${ROOT_URL}${userid}`);

export const updateUser = (username, data) => axios.put(`${ROOT_URL}/${username}`, data);

export const signupUser = data => axios.post('/api/auth/signup', data);

export const signinUser = data => axios.post('/api/auth/signin', data);

export default {
  getUsers,
  getUser,
  signupUser,
  signinUser,
  updateUser
};