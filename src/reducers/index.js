import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as form } from "redux-form";

import usersReducer from 'reducers/UsersReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  form,
  users: usersReducer,
});

export default rootReducer;
