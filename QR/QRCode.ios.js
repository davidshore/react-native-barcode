/**
 * @providesModule QRCode
 * @flow
 */

'use strict';

import React from 'react';
import { requireNativeComponent } from 'react-native';
//var React = require('react-native');
//var { requireNativeComponent } = React;

class QRCode extends React.Component {
  render() {
    return <LFQRCode {...this.props} />;
  }
}

QRCode.propTypes = {
  /**
   * This is the content of the generated Aztec Code
   */
   content: React.PropTypes.string,
};

var LFQRCode = requireNativeComponent('LFQRCode', QRCode);

module.exports = QRCode;
