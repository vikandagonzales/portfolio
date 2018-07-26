// REACT
import React from 'react';

// DATA
import links from '../db/links';

// ==========

class Socials extends React.Component {
  render () {
    return links.map(link => {
      return (
        <a
          className="navbar-item underline"
          key={link.name}
          href={link.href}
        >
          {link.name}
        </a>
      );
    });
  };
};

export default Socials;
