import React, { Component } from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import LogoImg from 'images/logo.jpg';
import './style.css';

const Header = () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="signin">Signin</Link></li>
      <li><Link to="signup">Signup</Link></li>
    </ul>
  </nav>
);

export default Header;