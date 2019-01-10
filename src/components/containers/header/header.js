/* eslint-disable max-len */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import isLoggedOn from '../../../utils/loginCheck/isLoggedIn';
import './styles/header.scss';

class NavBar extends Component {
  render() {
    if (isLoggedOn()) {
      return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              <h2>StackOverFlow</h2><span>Lite</span>
            </Link>

            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <Link className="button is-link" to="/regi">
                    <strong>Profile</strong>
                  </Link>
                  <Link className="button is-light" to="/login">
                    Logout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      );
    }
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <h2>StackOverFlow</h2><span>Lite</span>
          </Link>

          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link className="button is-link" to="/register">
                  <strong>Register</strong>
                </Link>
                <Link className="button is-light" to="/login">
              Log in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
