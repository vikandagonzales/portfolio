// REACT
import React from 'react';

// DATA
import skills from '../db/skills';

// COMPONENTS
import Skill from './Skill';

// ==========

class Skills extends React.Component {
  render () {
    return (
      <section id="skills" className="hero is-medium is-primary is-bold">
        <div className="hero-body">
          <div className="container">
            <div className="content">
              <div className="columns has-text-centered is-6 is-variable">
                {
                  skills.map(skill => {
                    return (
                      <Skill key={skill.name} skill={skill} />
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

export default Skills;
