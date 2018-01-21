import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from 'components/Loader';
import './styles.css';

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
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.term} onChange={this.handleChange} />
          <span>{error}</span>
          <button>Go</button>
        </form>
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