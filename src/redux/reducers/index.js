import { combineReducers } from 'redux'
import AddTaskReducer from './AddTaskReducer'

export default combineReducers({
  addTask: AddTaskReducer,
})
