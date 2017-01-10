'use strict';

import React from 'react';
import './header.scss';

class Header extends React.Component {
  render() {
    return (
      <div className="header-container">
        <h1 className="mdl-typography--display-4">{this.props.name}</h1>
        <span className="mdl-typography--headline">{this.props.title}</span>
      </div>
    );
  }
}

module.exports = Header;

