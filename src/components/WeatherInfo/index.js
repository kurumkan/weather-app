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

        <ul>
          {
            weatherData.map(data => <li key={data.dt}>{data.deg}</li>)
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