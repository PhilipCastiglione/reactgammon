const initialState = {
  dice: [],
  activePlayer: null,
  selectedChecker: null
}

const rand6 = () => {
  return Math.ceil(Math.random() * 6)
}

const rollDice = () => {
  let newDice = [{ pips: rand6(), used: false, double: false}, { pips: rand6(), used: false, double: false }]
  if (newDice[0].pips === newDice[1].pips) {
    newDice[0].double = newDice[1].double = true
  }
  return { dice: newDice }
}

const useDie = (state, action) => {
  const useWithDouble = (die) => {
    return (die.double)? { ...die, double: false } : {...die, used: true }
  }

  let newDice
  if (state.dice[0].used) {
    newDice = state.dice.map((die, i) => {
      return (i === 0)? die : useWithDouble(die)
    })
  } else {
    newDice = state.dice.map((die, i) => {
      return (action.position === i)? useWithDouble(die) : die
    })
  }
  return { dice: newDice }
}

const togglePlayer = (state) => {
  return { activePlayer: 1 - state.activePlayer }
}

const setFirstPlayer = (state) => {
  let newActivePlayer
  if (state.dice[0].pips > state.dice[1].pips) {
    newActivePlayer = 0
  } else if (state.dice[1].pips > state.dice[0].pips) {
    newActivePlayer = 1
  } else {
    newActivePlayer = null
  }
  return { activePlayer: newActivePlayer }
}

const selectChecker = (action) => {
  return { selectedChecker: action.checker }
}

export const move = (state = initialState, action) => {
  switch (action.type) {
    case 'ROLL_DICE':
      return Object.assign({}, state, rollDice() )
    case 'USE_DIE':
      return Object.assign({}, state, useDie(state, action) )
    case 'TOGGLE_PLAYER':
      return Object.assign({}, state, togglePlayer(state) )
    case 'SET_FIRST_PLAYER':
      return Object.assign({}, state, setFirstPlayer(state) )
    case 'SELECT_CHECKER':
      return Object.assign({}, state, selectChecker(action) )
    default:
      return state
  }
}
