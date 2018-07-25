// REACT
import React from 'react';

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
                  <a className="email button is-light is-medium" href="mailto:vikanda.gonzales@yahoo.com">
                    <span className="icon is-small">
                      <i className="fas fa-envelope"></i>
                    </span>
                    <span>vikanda.gonzales@yahoo.com</span>
                  </a>
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
          </div>
        </div>
      </section>
    );
  };
};

export default Contact;
