/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

'use strict';

const React = require('react');
const StyleSheet = require('../../StyleSheet/StyleSheet');
const Text = require('../../Text/Text');
const View = require('../View/View');

class DummySegmentedControlIOS extends React.Component {
  render() {
    return (
      <View style={[styles.dummy, this.props.style]}>
        <Text style={styles.text}>
          SegmentedControlIOS is not supported on this platform!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  dummy: {
    width: 120,
    height: 50,
    backgroundColor: '#ffbcbc',
    borderWidth: 1,
    borderColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#333333',
    margin: 5,
    fontSize: 10,
  },
});

module.exports = DummySegmentedControlIOS;
