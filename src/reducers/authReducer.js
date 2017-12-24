import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR
} from 'constants/actionTypes';

const INIT_STATE = {
  authenticated: false,
  userid: '',
  error: ''
};

export default function ( state = INIT_STATE, action ) {
  switch ( action.type ) {
    case AUTH_USER:
      return { ...state, authenticated: true, userid: action.payload, error: '' };
    case UNAUTH_USER:
      return { ...state, authenticated: false, userid: null, error: '' };
    case AUTH_ERROR:
      return { ...state, authenticated: false, userid: null, error: action.payload.message };
    default:
      return state;
  }
}