import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as form } from "redux-form";

import usersReducer from 'reducers/usersReducer';
import auth from 'reducers/authReducer'

const rootReducer = combineReducers({
  routing: routerReducer,
  form,
  users: usersReducer,
  auth
});

export default rootReducer;
