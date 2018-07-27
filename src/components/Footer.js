// REACT
import React from 'react';

// DATA
import about from '../db/about';

// ==========

class Footer extends React.Component {
  render () {
    return (
      <footer className="footer has-text-centered">
        <div className="container">
           <div className="columns">
            <div className="column is-8-desktop is-offset-2-desktop">
              <p>
                <small>
                  Copyright © 2018 {about.first_name} {about.last_name}
                </small>
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  };
};

export default Footer;
