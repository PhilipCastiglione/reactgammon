import { combineReducers } from 'redux'

import { players } from './players'
import { move } from './move'
import { game } from './game'

export const masterReducer = combineReducers({
  players,
  move,
  game
})
