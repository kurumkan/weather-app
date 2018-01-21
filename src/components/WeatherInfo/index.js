import React, { Component } from 'react';
import { string, arrayOf, shape, bool, func } from 'prop-types';
import { Link } from 'react-router-dom';
import Loader from 'components/Loader';
import { getWeatherData } from 'actions/searchActions';
import './styles.css';

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
      <div>
        <Link to="/">&larr;</Link>
        <h1>{term}</h1>
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