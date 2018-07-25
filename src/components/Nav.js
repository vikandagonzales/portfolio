// REACT
import React from 'react';

// ==========

class Nav extends React.Component {
  render () {
    return (
      <nav className="navbar">
        <div className="navbar-brand">
          <a className="navbar-item" href="#home">
            <img src="assets/brand/logo.svg" alt="Vikanda Gonzales" />
          </a>
          <div className="navbar-burger" data-target="navMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="navbar-menu" id="navMenu">
          <div className="navbar-start">
            <a className="navbar-item underline" href="#about">
              About
            </a>
            <a className="navbar-item underline" href="#skills">
              Skills
            </a>
            <a className="navbar-item underline" href="#portfolio">
              Portfolio
            </a>
            <a className="navbar-item underline">
              Blog
            </a>
            <a className="navbar-item underline" href="#contact">
              Contact
            </a>
          </div>
          <div className="navbar-end is-hidden-touch">
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <a className="button facebook" href="https://www.facebook.com/vikanda" target="_blank" rel="noopener noreferrer">
                    <span className="icon">
                      <i className="fab fa-facebook-f" aria-hidden="true"></i>
                    </span>
                  </a>
                </p>
                <p className="control">
                  <a className="button twitter" href="https://twitter.com/vikandagonzales" target="_blank" rel="noopener noreferrer">
                    <span className="icon">
                      <i className="fab fa-twitter" aria-hidden="true"></i>
                    </span>
                  </a>
                </p>
                <p className="control">
                  <a className="button linkedin" href="https://www.linkedin.com/in/vikanda" target="_blank" rel="noopener noreferrer">
                    <span className="icon">
                      <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                    </span>
                  </a>
                </p>
                <p className="control">
                  <a className="button github" href="https://github.com/vikandagonzales" target="_blank" rel="noopener noreferrer">
                    <span className="icon">
                      <i className="fab fa-github" aria-hidden="true"></i>
                    </span>
                  </a>
                </p>
                <p className="control">
                  <a className="button deviantart" href="https://vikanda.deviantart.com" target="_blank" rel="noopener noreferrer">
                    <span className="icon">
                      <i className="fab fa-deviantart" aria-hidden="true"></i>
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  };
};

export default Nav;
