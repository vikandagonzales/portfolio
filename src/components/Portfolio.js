// REACT
import React from 'react';

// DATA
import projects from '../db/projects';

// COMPONENTS
import Project from './Project';

// ==========

class Portfolio extends React.Component {
  render () {
    return (
      <section id="portfolio" className="hero is-dark is-bold">
        <div className="hero-body">
          <div className="container">
            <div className="content">
              <h3 className="has-text-centered">My portfolio is under construction! Avert your eyes!</h3>
              <div className="columns has-text-centered">
                {
                  projects.map(project => {
                    return (
                      <Project key={project.name} project={project}/>
                    );
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
};

export default Portfolio;
