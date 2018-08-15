// REACT
import React from 'react';

// ==========

class Project extends React.Component {
  render () {
    return (
      <div className="column is-4-desktop is-6-tablet">
        <a>
          <img src={this.props.project.thumbnail} alt={this.props.project.name} />
        </a>
      </div>
    );
  };
};

export default Project;
