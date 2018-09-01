import React, { Component } from 'react'
import { View, TextInput } from 'react-native'
import { Button, FormLabel, FormInput } from 'react-native-elements'
import { connect } from 'react-redux'
import { titleChanged, descriptionChanged, typeChanged } from '../../redux/actions'

class AddTask extends Component {

  titleChange = (text) => {
    this.props.titleChanged(text)
  }

  descriptionChange = (text) => {
    this.props.descriptionChanged(text)
  }

  typeChange = (text) => {
    this.props.typeChanged(text)
  }

  render() {
    return (
      <View>
        <FormLabel>Title</FormLabel>
        <FormInput
          value={this.props.title}
          placeholder="Please type a title of your task..."
          onChangeText={this.titleChange}
        />

        <FormLabel>Description</FormLabel>
        <FormInput
          value={this.props.description}
          placeholder="Please add some description..."
          onChangeText={this.descriptionChange}
        />

        <FormLabel>Type</FormLabel>
        <FormInput
          value={this.props.type}
          placeholder="Please chose a category of task..."
          onChangeText={this.typeChange}
        />

        <Button
          backgroundColor="black"
          textStyle={{ color: 'yellow', fontWeight: 'bold' }}
          title="Add task"
          style={{ marginTop: 20 }}
          onPress={() => {}}
        />
      </View>
    )
  }
}

const mapStateToProps = ({ addTask }) => {
  const { title, description, type } = addTask

  return { title, description, type }
}

export default connect(mapStateToProps, { titleChanged, descriptionChanged, typeChanged })(AddTask)
