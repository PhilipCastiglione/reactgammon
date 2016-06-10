export const updateName = (player, name) => {
  return { type: 'UPDATE_NAME', player, name }
}

export const incrementGamesWon = (player) => {
  return { type: 'UPDATE_NAME', player }
}

export const addStakeWon = (player, stake) => {
  return { type: 'UPDATE_NAME', player, stake }
}

export const moveChecker = (player, checker, position) => {
  return { type: 'MOVE_CHECKER', player, checker, position }
}

export const resetCheckers = () => {
  return { type: 'RESET_CHECKERS' }
}
