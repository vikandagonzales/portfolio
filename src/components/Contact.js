// REACT
import React from 'react';

// DATA
import about from '../db/about';

// COMPONENTS
import Socials from './Socials';

// ==========

class Contact extends React.Component {
  render () {
    return (
      <section id="contact" className="hero is-medium is-light is-bold">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-8-desktop is-offset-2-desktop is-10-tablet is-offset-1-tablet">
                <div className="content has-text-centered">
                  <h1 className="title">Keep in Touch</h1>
                  <h3 className="title">For any inquiries, please email me at:</h3>
                  <a className="email button is-light is-medium" href={`mailto:${about.email}`}>
                    <span className="icon is-small">
                      <i className="fas fa-envelope"></i>
                    </span>
                    <span>{about.email}</span>
                  </a>
                  <Socials color="color" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
};

export default Contact;
