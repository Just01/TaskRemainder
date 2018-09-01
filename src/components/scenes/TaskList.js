import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Card, Button } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'
import { TEST_DATA_1, TEST_DATA_2 } from '../../data/data'
import TaskDeck from './TaskDeck'
import AnimatedFAB from '../common/AnimatedFAB'

export default class TaskList extends Component {
  state = {
    news: TEST_DATA_1,
  }

  renderCard = (item) => {
    return (
      <Card
        title={item.title}
        image={{ uri: item.uri }} >
        <Text style={{ margin: 10 }}>{item.description}</Text>
        <Button
          backgroundColor="black"
          textStyle={{ color: 'yellow', fontWeight: 'bold' }}
          title="View Now"
          style={{ borderRadius: 8 }}
        />
      </Card>
    )
  }

  handleDataRender = () => {
    const news = this.state.news === TEST_DATA_1 ? TEST_DATA_2 : TEST_DATA_1
    this.setState({ news })
  }

  renderNoMoreCards = () => {
    return (
      <View>
        <Card title="All Done!">
          <Text style={{ marginBottom: 10, alignSelf: 'center' }}>
            There is no more news for you here! :)
          </Text>
          <Button
            backgroundColor="black"
            textStyle={{ color: 'yellow', fontWeight: 'bold' }}
            title="More news"
            style={{ borderRadius: 8 }}
            onPress={() => this.handleDataRender()}
          />
        </Card>
      </View>
    )
  }

  render() {
    return (
      <View>
        <TaskDeck
          data={this.state.news}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
        />
        <AnimatedFAB
          goTo={() => Actions.addTask()}
        />
      </View>
    )
  }
}
