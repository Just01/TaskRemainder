import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
// local imports
import AppNavigator from './utils/AppNavigator'
import reducers from './redux/reducers'

const myStore = createStore(reducers, {}, applyMiddleware(ReduxThunk))

class App extends Component {
  render() {
    return (
      <Provider store={myStore}>
        <AppNavigator />
      </Provider>
    )
  }
}

export default App
