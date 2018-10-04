// REACT
import React from 'react';

// ==========

class Skill extends React.Component {
  render () {
    return (
      <div className="column is-4-desktop">
        <div id="design" className="skill-container">
          <a className="info">
            <span className="lnr-layers"></span>
          </a>
          <div className="skill front">
            <span className={this.props.skill.icon}></span>
            <h2 className="title">
              {this.props.skill.name}
            </h2>
          </div>
          <div className="skill back">
            <h3 className="title is-3 has-text-left">{this.props.skill.name}</h3>
            <div className="field is-grouped">
              {
                this.props.skill.tools.map(tool => {
                  return (
                    <p key={tool.name} className="control">
                      <a className="button">
                        <span className={tool.icon}></span>
                      </a>
                    </p>
                  );
                })
              }
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default Skill;
