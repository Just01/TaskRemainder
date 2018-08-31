import React from 'react'
import { Scene, Router } from 'react-native-router-flux'

import TaskList from '../components/scenes/TaskList'
import AddTask from '../components/scenes/AddTask'


const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>

        <Scene key="main">
          <Scene key="taskList" component={TaskList} title="Your tasks" />
          <Scene key="addTask" component={AddTask} title="New Task" backTitle=" "  />
        </Scene>

      </Scene>
    </Router>
  )
}

export default RouterComponent