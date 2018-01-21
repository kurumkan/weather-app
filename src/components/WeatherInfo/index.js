import React, { Component } from 'react';
import { string, arrayOf, shape, bool, func } from 'prop-types';
import { Link } from 'react-router-dom';
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
    if(this.props.gettingData) {
      return <Loader />
    }
    const { term, weatherData } = this.props;
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
          <h2>Tuesday, December 6th 2016</h2>
          <h3>Light snow</h3>
          <div className="weather-data">
            <span>39&deg;F</span>
            <span>icon</span>
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