import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { titleChanged, descriptionChanged, typeChanged } from '../../redux/actions'

class AddTask extends Component {
  render() {
    return (
      <View>
        <Text>Add</Text>
      </View>
    )
  }
}

const mapStateToProps = ({ addTask }) => {
  const { title, description, type } = addTask

  return { title, description, type }
}

export default connect(mapStateToProps, { titleChanged, descriptionChanged, typeChanged })(AddTask)
