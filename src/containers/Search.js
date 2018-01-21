import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Search from 'components/Search';
import { getWeatherData } from 'actions/searchActions';

const select = ({ weather }) => weather;

const actions = {
  getWeatherData
};

export default withRouter(connect(select, actions)(Search));
