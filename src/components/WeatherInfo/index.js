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
          <h3>Light snow</h3>
          <div className="weather-data">
            <span className="current-degree">{currentData.temp.day}&deg;F</span>
            <span><i className="wi wi-night-sleet"></i></span>
            <ul className="temp-list">
              <li>
                <span>Morning</span><span>40&deg;F</span>
                <span>Day</span><span>40&deg;F</span>
                <span>Evening</span><span>40&deg;F</span>
                <span>Night</span><span>40&deg;F</span>
              </li>
            </ul>
          </div>
        </div>
        <ul>
          {
            weatherData.map(data =>
              <li key={data.dt}>
                <span>{'Tuesday'}</span>
                icon
                <span>{data.temp.day}&deg;F</span>
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