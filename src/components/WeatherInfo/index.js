import React, { Component } from 'react';
import { string, arrayOf, shape, bool, func } from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';
import FontAwesome from 'react-fontawesome';
import Loader from 'components/Loader';
import ToggleSwitch from 'components/ToggleSwitch';
import { getWeatherData, changeTempFormat } from 'actions/searchActions';
import './styles.scss';

class WeatherInfo extends Component {
  componentDidMount() {
    const { match: { params }, getWeatherData, term } = this.props;
    if(!term && params && params.city) {
      getWeatherData(params.city);
    }
  }

  getActualTemp = (temp) => {
    const { tempFormat } = this.props;
    temp = tempFormat === 'C' ? temp : temp * 9/ 5 + 32;
    return  <span>{Math.round(temp)}&deg;{tempFormat}</span>
  };

  renderIcon = (weatherStatus) => {
    let suffix = weatherStatus.toLowerCase();
    switch(suffix) {
      case 'clear':
        suffix = 'sunny';
        break;
      case 'few clouds':
      case 'scattered clouds':
      case 'broken clouds':
      case 'clouds':
        suffix = 'cloudy';
        break;
      case 'shower rain':
        suffix = 'showers';
        break;
      case 'mist':
        suffix = 'fog';
        break;
    }
    return <i className={`wi wi-day-${suffix}`} />
  }

  render() {
    const { term, weatherData, gettingData, changeTempFormat } = this.props;
    if(gettingData || !weatherData.length) {
      return <Loader />;
    }
    const currentData = weatherData[0];
    console.log(weatherData)
    return (
      <div className="weather-info">
        <div className="header">
          <Link to="/">
            <FontAwesome name="arrow-left" size="lg" />
          </Link>
          <h1>{term}</h1>
          <ToggleSwitch
            options={{
              checked: '&deg; F',
              unchecked: '&deg C'
            }}
            onChange={changeTempFormat}
            className="toggle-temp"
          />
        </div>
        <div className="current-weather">
          <h2>{moment.unix(currentData.dt).format('dddd, MMMM Do YYYY')}</h2>
          <h3>{currentData.weather[0].main}</h3>
          <div className="weather-data">
            <span className="current-degree">{this.getActualTemp(currentData.temp.day)}</span>
            <span className="icon-wrapper">
              {this.renderIcon(currentData.weather[0].main)}
            </span>
            <ul className="temp-list">
              <li>
                <span>Morning</span>{this.getActualTemp(currentData.temp.morn)}
              </li>
              <li>
                <span>Day</span>{this.getActualTemp(currentData.temp.day)}
              </li>
              <li>
                <span>Evening</span>{currentData.temp.eve}
              </li>
              <li>
                <span>Night</span>{currentData.temp.night}
              </li>
            </ul>
          </div>
        </div>
        <ul className="forecast">
          {
            weatherData.map(data =>
              <li key={data.dt}>
                <span>{moment.unix(data.dt).format('dddd')}</span>
                <span className="icon-wrapper">
                  {this.renderIcon(data.weather[0].main)}
                </span>
                {this.getActualTemp(data.temp.day)}
              </li>
            )
          }
        </ul>
      </div>
    );
  }
}

WeatherInfo.propTypes = {
  gettingData: bool,
  term: string,
  tempFormat: string,
  weatherData: arrayOf(shape({})),

  changeTempFormat: func.isRequired,
  getWeatherData: func.isRequired
};

WeatherInfo.defaultProps = {
  gettingData: false,
  term: '',
  tempFormat: 'C',
  weatherData: []
};

export default WeatherInfo;