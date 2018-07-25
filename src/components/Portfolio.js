// REACT
import React from 'react';

// ==========

class Portfolio extends React.Component {
  render () {
    return (
      <section id="portfolio" className="hero is-dark is-bold">
        <div className="hero-body">
          <div className="container">
            <div className="content">
              <div className="columns has-text-centered">
                <div className="column is-4-desktop is-6-tablet">
                  <a>
                    <img src="assets/projects/your-divine-addictions/0.png" alt="Your Divine Addictions" />
                  </a>
                </div>
                <div className="column is-4-desktop is-6-tablet">
                  <a>
                    <img src="assets/projects/gonzales-music/0.png" alt="Gonzales Music" />
                  </a>
                </div>
                <div className="column is-4-desktop is-6-tablet">
                  <a>
                    <img src="assets/projects/vintage-blossoms/0.png" alt="Vintage Blossoms" />
                  </a>
                </div>
                <div className="column is-4-desktop is-6-tablet">
                  <a>
                    <img src="assets/projects/veil-creations/0.png" alt="Veil Creations" />
                  </a>
                </div>
                <div className="column is-4-desktop is-6-tablet">
                  <a>
                    <img src="assets/projects/veil-guild/0.png" alt="Veil Guild" />
                  </a>
                </div>
                <div className="column is-4-desktop is-6-tablet">
                  <a>
                    <img src="assets/projects/the-chobocobros/0.png" alt="The Chobocobros" />
                  </a>
                </div>
                <div className="column is-4-desktop is-6-tablet">
                  <a>
                    <img src="assets/projects/nino-vanessa/0.png" alt="Nino & Vanessa" />
                  </a>
                </div>
                <div className="column is-4-desktop is-6-tablet">
                  <a>
                    <img src="assets/projects/devin-samantha/0.png" alt="Devin & Samantha" />
                  </a>
                </div>
                <div className="column is-4-desktop is-6-tablet">
                  <a>
                    <img src="assets/projects/meraki/0.png" alt="Meraki" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
};

export default Portfolio;
