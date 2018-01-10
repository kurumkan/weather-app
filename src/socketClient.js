import { store } from 'index';
import io from 'socket.io-client';
import { setActiveClients, notifyClientStatusChange } from 'actions/usersActions';

const API_URL = process.env.NODE_ENV === 'production' ? window.location.host : 'http://localhost:5000';
const socket = io(API_URL);

socket.on('SET_ACTIVE_CLIENTS', data => {
  store.dispatch(setActiveClients(data.map(socket => socket.username)));
});

socket.on('CLIENT_CONNECTED', username => {
  store.dispatch(notifyClientStatusChange(username, true));
});

socket.on('CLIENT_DISCONNECTED', username => {
  store.dispatch(notifyClientStatusChange(username, false));
});

export default socket;