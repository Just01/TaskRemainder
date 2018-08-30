import React from 'react'
import { Scene, Router } from 'react-native-router-flux'

import TaskList from '../../components/scenes/main/TaskList'


const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>

        <Scene key="main">
          <Scene key="taskList" component={TaskList} title="Your tasks" />
        </Scene>

      </Scene>
    </Router>
  )
}

export default RouterComponent