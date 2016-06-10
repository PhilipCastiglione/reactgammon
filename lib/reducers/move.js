const initialState = {
  dice: [],
  activePlayer: null
}

const rand6 = () => {
  return Math.ceil(Math.random() * 6)
}

const rollDice = (state = [], action) => {
  let newDice = [{ pips: rand6(), used: false }, { pips: rand6(), used: false }]
  return Object.assign({}, state, { dice: newDice })
}

export const move = (state = initialState, action) => {
  switch (action.type) {
    case 'ROLL_DICE':
      return Object.assign({}, state, rollDice(state, action) )
    case 'SWAP_DICE':
    case 'USE_DIE':
    case 'UNUSE_DIE':
    case 'TOGGLE_PLAYER':
    default:
      return state
  }
}
