import React  from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const NotFound = () => (
  <section className="notfound-section">
    <div className="notfound-content">
      <h1>404</h1>
      <h2>Sorry, we can't find the page!</h2>
      <p>Either something went wrong or the page doesn't exist anymore</p>
      <Link to="/" className="btn">Take me home</Link>
    </div>

  </section>
);

export default NotFound;
