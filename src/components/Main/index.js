import React from 'react';
import './index.scss';

const Home = ({ children }) => (
  <div className="container">
    <div className="content-wrapper">
      {children}
    </div>
  </div>
);

export default Home;
