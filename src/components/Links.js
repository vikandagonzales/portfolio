// REACT
import React from 'react';

// DATA
import links from '../db/links';

// COMPONENTS
import Link from './Link';

// ==========

class Links extends React.Component {
  render () {
    return links.map(link => {
      return (
        <Link key={link.name} link={link} />
      );
    });
  };
};

export default Links;
