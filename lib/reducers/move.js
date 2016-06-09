import * from '../actions/move'

const rand6 = () => {
  return Math.ceil(Math.random() * 6)
}

const rollDiceReducer = (state, action) => {
  let newDice = [{ pips: rand6(), used: false}, { pips: rand6(), used: false}]
  return Object.assign({}, state, { dice: newDice })
}

export const moveReducer = (state, action) => {
  switch (action.type) {
    case ROLL_DICE:
      return Object.assign({}, state, { move: rollDiceReducer(state.move, action) })
    case SWAP_DICE:
    case USE_DIE:
    case UNUSE_DIE:
    case TOGGLE_PLAYER:
    default:
      return state
  }
}
