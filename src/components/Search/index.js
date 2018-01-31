import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import Loader from 'components/Loader';
import browserHistory from 'browserHistory';
import './styles.scss';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }
  componentDidMount() {
    this.setState({
      term: this.props.term
    });
  }

  getLocalWeather = () => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    const success = (pos) => this.props.getWeatherData({ lat: pos.coords.latitude, lon: pos.coords.longitude });

    const error = () => console.warn('Sorry, cannot get your location');

    navigator.geolocation.getCurrentPosition(success, error, options);
  };
  handleChange = (e) => {
    this.setState({ term: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { term } = this.state;
    if(term) {
      this.props.getWeatherData({ city: term })
        .then(() => browserHistory.push(`/search/${term.toLowerCase()}`))
        .catch(() => {});
    }
  };
  render() {
    if(this.props.gettingData) {
      return <Loader />
    }

    const { error } = this.props;

    return (
      <div className="search-wrapper">
        <div className="search">
          <div className="error">{error}</div>
          <form onSubmit={this.handleSubmit} className="search-form">
            <input type="search" value={this.state.term} onChange={this.handleChange} placeholder="City" />
            <button className="btn-search">
              <FontAwesome name="search" size="lg" />
            </button>
          </form>
          <div className="current-location-cat">
            <span>or</span>
            use my <Link to="#" onClick={this.getLocalWeather}>current location</Link>
          </div>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  error: PropTypes.string,
  gettingData: PropTypes.bool,
  term: PropTypes.string,

  getWeatherData: PropTypes.func.isRequired
};

Search.defaultProps = {
  error: '',
  gettingData: false,
  term: '',
};

export default Search;