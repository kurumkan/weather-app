import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import weatherReducer from 'reducers/weatherDataReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  weather: weatherReducer
});

export default rootReducer;
