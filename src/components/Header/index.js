import React, { Component } from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import LogoImg from 'images/logo.jpg';
import './style.css';

const Header = ({ authenticated, username, signoutUser }) => (
  <nav>
    <ul>
      { authenticated && <li><Link to="/">Home</Link></li> }
      { authenticated && <li><Link to={`/users/${username}/edit`}>Profile Edit</Link></li> }
      { authenticated && <li><Link onClick={signoutUser}>Signout</Link></li> }
      { !authenticated && <li><Link to="signin">Signin</Link></li> }
      { !authenticated && <li><Link to="signup">Signup</Link></li> }
    </ul>
  </nav>
);

export default Header;