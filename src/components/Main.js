import React from 'react';
import './Main.scss';

const Home = ({ children }) => (
  <div className="container">
    <div className="content-wrapper">
      {children}
    </div>
  </div>
);

export default Home;
