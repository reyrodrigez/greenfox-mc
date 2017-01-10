'use strict';

import React from 'react';
import { connect } from 'react-redux'

const Header = require('./header');

function Component() {
  class Root extends React.Component {
    render() {
      return (
        <div>
          <Header name="Welcome" title="to Greenfox" />
        </div>
      );
    }
  }

  return connect()(Root);
}

Component.deps = [];
module.exports = Component;
