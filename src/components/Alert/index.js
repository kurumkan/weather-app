import React, { Component } from 'react';
import './style.css';

const Alert = ({ message }) => (
  <div className="alert-block">
    { message }
  </div>
);

export default Alert;