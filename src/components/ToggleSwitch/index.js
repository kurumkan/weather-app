import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: this.props.checked
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      checked: !this.state.checked
    }, () => this.props.onChange(this.state.checked));
  }

  render() {
    const { options, className } = this.props;
    return (
      <label className={`switch ${className}`}>
        <input
          type="checkbox"
          checked={this.state.checked}
          onChange={this.handleChange}
        />
        <span className="slider round">
          <span
            className="status-text"
            dangerouslySetInnerHTML={{
              __html: this.state.checked ? options.checked : options.unchecked
            }}
          />
        </span>
      </label>
    );
  }
}

Toggle.propTypes = {
  checked: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.shape({
    checked: PropTypes.string,
    unchecked: PropTypes.string
  })
};

Toggle.defaultProps = {
  checked: false,
  className: '',
  options: null
};

export default Toggle;