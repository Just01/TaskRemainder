import { TITLE_CHANGED, DESCRIPTION_CHANGED, TYPE_CHANGED } from '../types'

export const titleChanged = (text) => {
  return {
    type: TITLE_CHANGED,
    payload: text,
  }
}

export const descriptionChanged = (text) => {
  return {
    type: DESCRIPTION_CHANGED,
    payload: text,
  }
}

export const typeChanged = (text) => {
  return {
    type: TYPE_CHANGED,
    payload: text,
  }
}
