import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import Branch from './Branch';
import NodeInfo from '../common/index';

class Root extends Component {
  componentWillUpdate() {
    this.childNodes = []
  }

  render() {
    return (
      <View style={styles.rootContainer}>
        <Branch
          {...this.props}
          ref={ref => ref && (this.childNodes = ref.childNodes)}
          parentNode={this}
          root={this}
        />
      </View>
    )
  }
}

Root.propTypes = {
  childNodes: PropTypes.arrayOf(PropTypes.shape(NodeInfo.node)),
};

export default Root;

const styles = StyleSheet.create({
    rootContainer: {
        display: 'flex',
        marginLeft: 18,
    }
})