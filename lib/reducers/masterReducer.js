import { combineReducers } from 'redux'
import { playersReducer } from './players'
import { moveReducer } from './move'
import { gameReducer } from './game'

export const masterReducer = combineReducers({
  playersReducer,
  moveReducer,
  gameReducer
})
