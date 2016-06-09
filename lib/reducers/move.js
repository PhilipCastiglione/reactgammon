import ROLL_DICE from '../actions/move'
import SWAP_DICE from '../actions/move'
import USE_DIE from '../actions/move'
import UNUSE_DIE from '../actions/move'
import TOGGLE_PLAYER from '../actions/move'

const initialState = {
  dice: [],
  activePlayer: null
}

const rand6 = () => {
  return Math.ceil(Math.random() * 6)
}

const rollDiceReducer = (state = [], action) => {
  let newDice = [{ pips: rand6(), used: false }, { pips: rand6(), used: false }]
  return Object.assign({}, state, { dice: newDice })
}

export const moveReducer = (state = initialState, action) => {
  switch (action.type) {
    case ROLL_DICE:
      return Object.assign({}, state, { move: rollDiceReducer(state, action) })
    case SWAP_DICE:
    case USE_DIE:
    case UNUSE_DIE:
    case TOGGLE_PLAYER:
    default:
      return state
  }
}
