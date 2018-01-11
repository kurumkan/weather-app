import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import './style.css';

const Header = ({ authenticated, username, signoutUser }) => (
  <header className="header">
    <nav>
      <ul>
        { authenticated && <li><Link to="/">Home</Link></li> }
        { authenticated && <li><Link to={`/users/${username}/edit`}>Profile Edit</Link></li> }
        { authenticated && <li className="right-aligned"><Link onClick={signoutUser} to="/signup">Signout</Link></li> }
        { !authenticated && <li><Link to="signin">Signin</Link></li> }
        { !authenticated && <li><Link to="signup">Signup</Link></li> }
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  authenticated: PropTypes.bool,
  username: PropTypes.string,

  signoutUser: PropTypes.func.isRequired
};

Header.defaultProps = {
  authenticated: false,
  username: ''
};

export default Header;