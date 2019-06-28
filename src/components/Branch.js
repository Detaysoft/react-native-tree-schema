import React, { Component } from 'react';
import { 
  View, 
  StyleSheet, 
  FlatList
} from 'react-native';
import PropTypes from 'prop-types';
import Node from './Node';
import NodeInfo from '../common/index'

class Branch extends Component {
  constructor(props) {
    super(props)

    this.childNodes = [];
  }

  componentWillUpdate() {
    this.childNodes = []
  }

  render() {
    const {
      childNodes,
      parentNode,
      root,
      depth,
      onPress,
    } = this.props;

    return (
      <FlatList
        data={childNodes}
        renderItem={({item}) => {
          return(
            <Node
              ref={ref => ref && this.childNodes.push(ref)}
              node={item}
              branch={this}
              parentNode={parentNode}
              root={root}
              depth={depth + 1}
              onPress={onPress}
            />
          )
        }}
      />
    )
  }
}

Branch.defaultProps = {
  depth: 0,
  onPress: () => {},
};

Branch.propTypes = {
    childNodes: PropTypes.arrayOf(NodeInfo.Node).isRequired,
    parentNode: PropTypes.instanceOf(React.Component).isRequired,
    root: PropTypes.instanceOf(React.Component).isRequired,
    depth: PropTypes.number,
    onPress: PropTypes.func,
};

export default Branch;
