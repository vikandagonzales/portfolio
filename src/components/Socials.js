// REACT
import React from 'react';

// DATA
import socials from '../db/socials';

// ==========

class Socials extends React.Component {
  render () {
    return (
      <div className="field is-grouped">
        {
          socials.map(social => {
            return (
              <p key={social.name} className="control">
                <a
                  className={`button ${social.class}`}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="icon">
                    <i className={social.icon}></i>
                  </span>
                </a>
              </p>
            );
          })
        }
      </div>
    );
  };
};

export default Socials;
