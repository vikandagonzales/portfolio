// REACT
import React from 'react';

// JQUERY
import $ from 'jquery';

// ==========

class Return extends React.Component {
  render () {
    return (
      <a id="return" onClick={() => {$('html, body').animate({scrollTop: 0}, 500)}}>
        <span className="lnr-chevron-up"></span>
      </a>
    );
  };
};

export default Return;
