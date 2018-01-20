import React from 'react';
import './Main.css';

const Home = ({ children }) => (
  <div className="container">
    <div className="content-wrapper">
      {children}
    </div>
  </div>
);

export default Home;
