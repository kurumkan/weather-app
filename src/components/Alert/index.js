import React, { Component } from 'react';
import './style.css';

const Alert = ({ message }) => message ? <div className="alert">{ message }</div> : null;

export default Alert;