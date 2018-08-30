import React, { Component } from 'react'
import { View, Animated, TouchableOpacity, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default class AnimatedFAB extends Component {
  componentWillMount() {
    this.position = new Animated.ValueXY({ x: 300, y: 0 })
    Animated.spring(this.position, {
      toValue: { x: 300, y: 530 },
    }).start()
  }

  render() {
    return (
      <Animated.View style={this.position.getLayout()}>
        <TouchableOpacity style={styles.ball}>

        </TouchableOpacity>
      </Animated.View>
    )
  }
}

const styles = {
  ball: {
    height: 50,
    width: 50,
    borderRadius: 30,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 3,
    borderWidth: 3,
    borderColor: 'black',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 6,
  },
}
