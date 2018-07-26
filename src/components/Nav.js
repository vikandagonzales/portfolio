// REACT
import React from 'react';

// COMPONENTS
import Links from './Links';
import Socials from './Socials';

// ==========

class Nav extends React.Component {
  render () {
    return (
      <nav className="navbar">
        <div className="navbar-brand">
          <a className="navbar-item" href="#home">
            <img src="./assets/brand/logo.svg" alt="Vikanda Gonzales" />
          </a>
          <div className="navbar-burger" data-target="navMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="navbar-menu" id="navMenu">
          <div className="navbar-start">
            <Links />
          </div>
          <div className="navbar-end is-hidden-touch">
            <div className="navbar-item">
              <Socials />
            </div>
          </div>
        </div>
      </nav>
    );
  };
};

export default Nav;
