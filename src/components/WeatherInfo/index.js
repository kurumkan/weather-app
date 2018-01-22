import React, { Component } from 'react';
import { string, arrayOf, shape, bool, func } from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';
import FontAwesome from 'react-fontawesome';
import Loader from 'components/Loader';
import ToggleSwitch from 'components/ToggleSwitch';
import { getWeatherData } from 'actions/searchActions';
import './styles.scss';

class WeatherInfo extends Component {
  componentDidMount() {
    const { match: { params }, getWeatherData, term } = this.props;
    if(!term && params && params.city) {
      getWeatherData(params.city);
    }
  }

  renderIcon = (weatherStatus) => {
    let suffix = weatherStatus.toLowerCase();
    switch(suffix) {
      case 'clear':
        suffix = 'sunny';
        break;
      case 'few clouds':
      case 'scattered clouds':
      case 'broken clouds':
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
    const { term, weatherData, gettingData } = this.props;
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
              checked: '&deg; C',
              unchecked: '&deg F'
            }}
            onChange={() => console.log('toggled')}
            className="toggle-temp"
          />
        </div>
        <div className="current-weather">
          <h2>{moment.unix(currentData.dt).format('dddd, MMMM Do YYYY')}</h2>
          <h3>{currentData.weather[0].main}</h3>
          <div className="weather-data">
            <span className="current-degree">{currentData.temp.day}&deg;F</span>
            <span className="icon-wrapper">
              {this.renderIcon(currentData.weather[0].main)}
            </span>
            <ul className="temp-list">
              <li>
                <span>Morning</span><span>{Math.round(currentData.temp.morn)}&deg;F</span>
              </li>
              <li>
                <span>Day</span><span>{Math.round(currentData.temp.day)}&deg;F</span>
              </li>
              <li>
                <span>Evening</span><span>{Math.round(currentData.temp.eve)}&deg;F</span>
              </li>
              <li>
                <span>Night</span><span>{Math.round(currentData.temp.night)}&deg;F</span>
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
                <span>{Math.round(data.temp.day)}&deg;F</span>
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
  weatherData: arrayOf(shape({})),

  getWeatherData: func.isRequired
};

WeatherInfo.defaultProps = {
  gettingData: false,
  term: '',
  weatherData: []
};

export default WeatherInfo;