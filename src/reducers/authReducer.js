import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR
} from 'constants/actionTypes';

export default function ( state = {}, action ) {
  switch ( action.type ) {
    case AUTH_USER:
      return { ...state, authenticated: true, userid: action.payload };
    case UNAUTH_USER:
      return { ...state, authenticated: false, userid: null };
    case AUTH_ERROR:
      console.log('err', action.payload)
      return { ...state, authenticated: false, userid: null };
    default:
      return state;
  }
}