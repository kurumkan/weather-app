import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Search from 'components/Search';
import { getWeatherData } from 'actions/searchActions';

const select = (state) => {
  const { term } = state.weather;
  return { term };
};

const actions = {
  getWeatherData
};

export default withRouter(connect(select, actions)(Search));
