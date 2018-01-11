import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Alert = ({ message }) => message ? <div className="alert">{ message }</div> : null;

Alert.propTypes = {
  message: PropTypes.string
};

Alert.defaultProps = {
  message: ''
};

export default Alert;