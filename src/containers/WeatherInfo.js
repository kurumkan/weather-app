import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import WeatherInfo from 'components/WeatherInfo';
import { changeTempFormat, getWeatherData } from 'actions/searchActions';

const select = ({ weather: { gettingData, term, weatherData, tempFormat } }) => ({ gettingData, term, weatherData, tempFormat });

const actions = {
  changeTempFormat,
  getWeatherData
};

export default withRouter(connect(select, actions)(WeatherInfo));
