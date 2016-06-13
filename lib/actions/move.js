export const rollDice = () => {
  return { type: 'ROLL_DICE' }
}

export const useDie = (position) => {
  return { type: 'USE_DIE', position }
}

export const togglePlayer = () => {
  return { type: 'TOGGLE_PLAYER' }
}

export const setFirstPlayer = () => {
  return { type: 'SET_FIRST_PLAYER' }
}

export const selectChecker = (checker) => {
  return { type: 'SELECT_CHECKER', checker}
}
