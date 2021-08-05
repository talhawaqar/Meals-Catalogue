import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => (
  <div className="d-flex w-100 header">
    <Link className="header-logo" to="/">Meals In</Link>
  </div>
);

export default Header;
