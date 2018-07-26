// REACT
import React from 'react';

// ==========

class Header extends React.Component {
  render () {
    return (
      <section id="home" className="hero is-fullheight is-dark">
        <div className="parallax">
        </div>
        <div className="hero-body post-parallax">
          <div className="container">
            <div className="columns">
              <div className="column is-8-desktop is-offset-2-desktop has-text-centered">
                <img className="logo" src="./assets/brand/logo.svg" alt="Vikanda Gonzales" />
                <h1 className="title is-2 is-spaced">
                  Hi, I'm Vikanda.
                </h1>
                <h2 className="subtitle is-4">
                  I'm a <strong>developer</strong> / <strong>designer</strong> who loves creating beautiful things.
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-foot has-text-centered">
          <a href="#portfolio">
            <small>See my work</small>
            <span className="lnr-chevron-down"></span>
          </a>
        </div>
      </section>
    );
  };
};

export default Header;
