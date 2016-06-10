export const updateName = (player, name) => {
  return { type: 'UPDATE_NAME', player, name }
}

export const incrementGamesWon = (player) => {
  return { type: 'INCREMENT_GAMES_WON', player }
}

export const addStakeWon = (player, stake) => {
  return { type: 'ADD_STAKE_WON', player, stake }
}

export const moveChecker = (player, checker, position) => {
  return { type: 'MOVE_CHECKER', player, checker, position }
}

export const resetCheckers = () => {
  return { type: 'RESET_CHECKERS' }
}
