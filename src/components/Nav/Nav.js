/*eslint-disable */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

class TopNav extends Component {
  render() {
    return (
      <div className="TopNav">
        <header className="section">
          <div className="menuGroup right">
            <Link to="/list-wookchanglee">
              <img src="/images/wookchanglee/WeBucks-logo.svg" alt="logo" />
            </Link>
          </div>
          <div className="menuGroup left toggle">
            <ul>
              <li>
                <a href="#">COFFEE</a>
              </li>
              <li>
                <a href="#">MENU</a>
              </li>
              <li>
                <a href="#">STORE</a>
              </li>
              <li>
                <a href="#">WHAT'S NEW</a>
              </li>
              <li>
                <Link to="/login-wookchanglee">SIGN-IN</Link>
              </li>
            </ul>
          </div>
          <i className="fas fa-bars" id="toggleBar"></i>
        </header>
      </div>
    );
  }
}

export default TopNav;
