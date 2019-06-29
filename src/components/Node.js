import PropTypes from 'prop-types';
import React from 'react';
import { Icon } from 'react-native-elements';
import { 
    TouchableOpacity,
    Text,
    View,
    StyleSheet 
} from 'react-native';
import Branch from './Branch';
import NodeInfo from '../common/index.js';

class Node extends React.Component {
  constructor(props) {
    super(props)

    this.childNodes = []

    this.state = {
      node: props.node,
    }

    this.onPress = this.onPress.bind(this);
    this.onLongPress = this.onLongPress.bind(this);
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  componentWillUpdate() {
    this.childNodes = [];
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      node: Object.assign(this.state.node, {
        opened: nextProps.node.opened
      })
    })
  }

  /**
   * Toggle butonuna basınca listeyi kapatır.
  */
  close() {
    this.setState({
      node: Object.assign(this.state.node, {
        opened: false
      })
    })
  }

  /**
   * Toggle butonuna basınca listeyi açar.
  */
  open() {
    this.setState({
      node: Object.assign(this.state.node, {
        opened: true
      })
    })
  }

  onPress() {
    if (typeof this.props.node.onPress === 'function')
      this.props.node.onPress()
  }

  /**
   * Listedeki herhangi bir elemana uzun basınca çalışır.
  */
  onLongPress() {
    if (typeof this.props.node.onLongPress === 'function')
      this.props.node.onLongPress()
  }

  /**
   * Toggle butonuna basınca açma kapama işlemleri yapılır.
  */
  toggleOpen() {
    if (this.state.node.childNodes)
      this.state.node.opened ? this.close() : this.open()
    return;
  }

  /**
   * Propsdan almış olduğumuz ve toggle için olan iconun görüntülenmesi için.
  */
  getIcon() {
    var self = this;
    if (self.state.node.childNodes) {
      if (self.state.node.icon){ 
        return (
          <View style={styles.nodeIconContainer}>
            { 
              <View>
                {
                  !self.state.node.opened ? 
                  
                  <Icon
                    color='#00aced'
                    name='keyboard-arrow-right'/>:

                  <Icon
                    color='#00aced'
                   name='keyboard-arrow-down' />
                }
              </View>
            }
              <View>{self.state.node.icon}</View>
          </View>
        )  
      }
      return(
        <View>
          {
            !self.state.node.opened ? 
            <Icon
              color='#00aced'
              name='keyboard-arrow-right' />:
            <Icon
              color='#00aced'
              name='keyboard-arrow-down'
            />
          }
        </View>
      )
    }
    return (
      <View style={{marginLeft:10}}>
        {self.state.node.icon && self.state.node.icon}
      </View>
    )
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.toggleOpen} onLongPress={this.onLongPress}>
          <View style={styles.nodeItem}>
            <View style={styles.nodeIcon}>
              {this.getIcon()}
            </View>
            <Text style={styles.nodeText}>
              {this.state.node.name}
            </Text>
          </View>
        </TouchableOpacity>
        {
          this.state.node.childNodes && this.state.node.opened && (
          <Branch
            ref={ref => ref && (this.childNodes = ref.childNodes)}
            childNodes={this.state.node.childNodes}
            parentNode={this}
            root={this.props.root}
            depth={this.props.depth}
          />
          )
        }
      </View>
    )
  }
}

Node.defaultProps = {
  depth: 0,
  onPress: () => {},
};

Node.propTypes = {
  node: NodeInfo.Node.isRequired,
  branch: PropTypes.instanceOf(React.Component).isRequired,
  parentNode: PropTypes.instanceOf(React.Component).isRequired,
  root: PropTypes.instanceOf(React.Component).isRequired,
  depth: PropTypes.number,
  onPress: PropTypes.func,
};

export default Node;

const styles = StyleSheet.create({
  nodeIcon: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  nodeItem: {
    flexDirection:'row',
    margin: 5,
    alignItems: 'center',
    flex:1,
  },
  nodeText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#000',
  },
  nodeIconContainer: {
    flexDirection:'row',
  }
})
