// REACT
import React from 'react';

// DATA
import about from '../db/about';

// ==========

class About extends React.Component {
  render () {
    return (
      <section id="about" className="hero is-medium is-light is-bold">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-8-desktop is-offset-2-desktop is-10-tablet is-offset-1-tablet">
                <div className="content">
                  <div className="columns is-6 is-variable">
                    <div className="profile column is-4">
                      <img src={about.photo} alt={about.first_name} />
                    </div>
                    <div className="column is-8">
                      <h1 className="title has-text-centered">{about.first_name} {about.last_name}</h1>
                      <p className="has-text-justified">
                        {about.bio}
                      </p>
                    </div>
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

export default About;
