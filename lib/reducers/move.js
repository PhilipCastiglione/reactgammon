const initialState = {
  dice: [],
  activePlayer: null
}

const rand6 = () => {
  return Math.ceil(Math.random() * 6)
}

const rollDice = (state = [], action) => {
  let newDice = [{ pips: rand6(), used: false }, { pips: rand6(), used: false }]
  return { dice: newDice }
}

const swapDice = (state = [], action) => {
  let newDice = [state.dice[1], state.dice[0]]
  return { dice: newDice }
}

const useDie = (state = [], action) => {
  let newDice = state.dice.map((die, i) => {
    return (action.postion === i)? { ...die, used: true } : die
  })
  return { dice: newDice }
}

const unuseDie = (state = [], action) => {
  let newDice = state.dice.map((die, i) => {
    return (action.postion === i)? { ...die, used: false } : die
  })
  return { dice: newDice }
}

const togglePlayer = (state = [], action) => {
  return { activePlayer: 1 - state.activePlayer }
}

export const move = (state = initialState, action) => {
  switch (action.type) {
    case 'ROLL_DICE':
      return Object.assign({}, state, rollDice(state, action) )
    case 'SWAP_DICE':
      return Object.assign({}, state, swapDice(state, action) )
    case 'USE_DIE':
      return Object.assign({}, state, useDie(state, action) )
    case 'UNUSE_DIE':
      return Object.assign({}, state, unuseDie(state, action) )
    case 'TOGGLE_PLAYER':
      return Object.assign({}, state, togglePlayer(state, action) )
    default:
      return state
  }
}
