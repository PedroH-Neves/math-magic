import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const activeStyle = {
    fontWeight: 'bold',
    color: 'red',
  };

  return (
    <nav className="navBar">
      <h1 className="navBar-title">Math Magicians</h1>
      <ul className="navBar-ul">
        <li className="navBar-item">
          <NavLink activeStyle={activeStyle} className="navLink" to="/">
            Home
          </NavLink>
        </li>
        <li className="navBar-item">
          <NavLink activeStyle={activeStyle} className="navLink" to="/Calculator">
            Calculator
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={activeStyle} className="navLink" to="/Quote">
            Quote
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
