/**
 * @providesModule AztecCode
 * @flow
 */

'use strict';
import React from 'react';
import {requireNativeComponent} from 'react-native';
//var React = require('react-native');
//var { requireNativeComponent } = React;

class AztecCode extends React.Component {
  render() {
    return <LFAztecCode {...this.props} />;
  }
}

AztecCode.propTypes = {
  /**
   * This is the content of the generated Aztec Code
   */
   content: React.PropTypes.string,
};

var LFAztecCode = requireNativeComponent('LFAztecCode', AztecCode);

module.exports = AztecCode;
