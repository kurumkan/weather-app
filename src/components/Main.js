import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Main.css';

import HeaderContainer from 'containers/HeaderContainer';

const Home = ({ children }) => {
  return (
    <div className="container">
      <HeaderContainer />
      <div className="content-wrapper">
        {children}
      </div>
    </div>
  );
};

export default Home;
