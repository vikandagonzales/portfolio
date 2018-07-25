// REACT
import React from 'react';

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
                      <img src="assets/photo.jpg" alt="Vikanda" />
                    </div>
                    <div className="column is-8">
                      <h1 className="title has-text-centered">Vikanda Gonzales</h1>
                      <p className="has-text-justified">
                        I'm a full-stack developer, graphic and web designer, illustrator, linguist, polyglot, and gamer. I've spent most of my life moving between different countries. I started making websites when I was 11 in an attempt to cope with culture shock, and it turned into one of my most long-lived passions. When I'm not coding, I enjoy traveling, playing video and tabletop games, trying different food, playing the piano, and learning more languages.
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
