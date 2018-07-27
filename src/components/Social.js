// REACT
import React from 'react';

// ==========

class Social extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      color: this.props.color === 'color' ? '#e66262' : 'transparent'
    }
  };

  render () {
    return (
      <p className="control">
        <a
          className="button"
          href={this.props.social.href}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => {this.setState({color: this.props.social.color})}}
          onMouseLeave={() => {this.setState({color: this.props.color === 'color' ? '#e66262' : 'transparent'})}}
          style={{[this.props.color]: this.state.color}}
        >
          <span className="icon">
            <i className={this.props.social.icon}></i>
          </span>
        </a>
      </p>
    );
  };
};

export default Social;
