import React, { Component } from 'react';

import './style.css';

const Loader = () => (
  <div className="loader-wrapper">
    <div className="loader">
      <div className="loader-inner-circle" />
      <div className="loader-inner-circle" />
      <div className="loader-inner-circle" />
      <div className="loader-inner-circle" />
    </div>
  </div>
);

export default Loader;