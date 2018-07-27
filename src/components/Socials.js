// REACT
import React from 'react';

// DATA
import socials from '../db/socials';

// COMPONENTS
import Social from './Social';

// ==========

class Socials extends React.Component {
  render () {
    return (
      <div className="field is-grouped">
        {
          socials.map(social => {
            return (
              <Social key={social.name} social={social} color={this.props.color} />
            );
          })
        }
      </div>
    );
  };
};

export default Socials;
