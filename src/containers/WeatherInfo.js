import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import WeatherInfo from 'components/WeatherInfo';
import { getWeatherData } from 'actions/searchActions';

const select = ({ weather: { gettingData, term, weatherData } }) => ({ gettingData, term, weatherData });

const actions = {
  getWeatherData
};

export default withRouter(connect(select, actions)(WeatherInfo));
