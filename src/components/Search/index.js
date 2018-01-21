import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import Loader from 'components/Loader';
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
  handleChange = (e) => {
    this.setState({ term: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { term } = this.state;
    if(term) {
      this.props.getWeatherData(term);
    }
  };
  render() {
    if(this.props.gettingData) {
      return <Loader />
    }

    const { error } = this.props;

    return (
      <div className="search">
        <form onSubmit={this.handleSubmit} className="search-form">
          <div>{error}</div>
          <input type="search" value={this.state.term} onChange={this.handleChange} placeholder="City" />
          <button className="btn-search">
            <FontAwesome name="search" size="lg" />
          </button>
        </form>
        <div className="current-location-cat">
          <span>or</span>
          use my <Link to="#">current location</Link>
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