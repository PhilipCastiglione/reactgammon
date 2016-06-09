export const updateName = (player, name) => {
  return { type: 'UPDATE_NAME', player, name }
}

export const incrementGamesWon = (player) => {
  return { type: 'UPDATE_NAME', player }
}

export const addStakeWon = (player, stake) => {
  return { type: 'UPDATE_NAME', player, stake }
}

export const moveChecker = (player, checker, distance) => {
  return { type: 'MOVE_CHECKER', player, checker, distance }
}

export const hitChecker = (player, checker) => {
  return { type: 'HIT_CHECKER', player, checker }
}

export const replaceChecker = (player, checker, position) => {
  return { type: 'REPLACE_CHECKER', player, checker, position }
}

export const bearOffChecker = (player, checker) => {
  return { type: 'BEAR_OFF_CHECKER', player, checker }
}

export const resetCheckers = () => {
  return { type: 'RESET_CHECKERS' }
}
