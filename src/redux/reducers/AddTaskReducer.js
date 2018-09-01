import { TITLE_CHANGED, DESCRIPTION_CHANGED, TYPE_CHANGED } from '../types'

const INITIAL_STATE = { title: '', description: '', type: '' }

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
    case TITLE_CHANGED:
      return { ...state, title: action.payload }
    case DESCRIPTION_CHANGED:
      return { ...state, description: action.payload }
    case TYPE_CHANGED:
      return { ...state, type: action.payload }
  }
}
