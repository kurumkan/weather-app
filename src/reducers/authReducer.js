import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  UPDATE_USER_SUCCESS
} from 'constants/actionTypes';

const INIT_STATE = {
  username: '',
  firstName: '',
  lastName: '',
  imageUrl: '',
  authenticated: false,
  userid: '',
  error: ''
};

export default function ( state = INIT_STATE, action ) {
  switch ( action.type ) {
    case AUTH_USER:
      return {
        authenticated: true,
        ...action.payload,
        error: ''
      };
    case UNAUTH_USER:
      return { ...INIT_STATE };
    case AUTH_ERROR:
      return { ...INIT_STATE, error: action.payload };
    case UPDATE_USER_SUCCESS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}