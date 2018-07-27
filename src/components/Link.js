// REACT
import React from 'react';

// ==========

class Link extends React.Component {
  render () {
    return (
      <a className="navbar-item underline" href={this.props.link.href}>
        {this.props.link.name}
      </a>
    );
  };
};

export default Link;
