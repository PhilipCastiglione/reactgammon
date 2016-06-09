export const UPDATE_NAME = 'UPDATE_NAME'
export const INCREMENT_GAMES_WON = 'INCREMENT_GAMES_WON'
export const ADD_STAKE_WON = 'ADD_STAKE_WON'
export const MOVE_CHECKER = 'MOVE_CHECKER'
export const HIT_CHECKER = 'HIT_CHECKER'
export const REPLACE_CHECKER = 'REPLACE_CHECKER'
export const BEAR_OFF_CHECKER = 'BEAR_OFF_CHECKER'
export const RESET_CHECKERS = 'RESET_CHECKERS'

export function updateName(player, name) {
  return { type: UPDATE_NAME, player, name }
}

export function incrementGamesWon(player) {
  return { type: UPDATE_NAME, player }
}

export function addStakeWon(player, stake) {
  return { type: UPDATE_NAME, player, stake }
}

export function moveChecker(player, checker, distance) {
  return { type: MOVE_CHECKER, player, checker, distance }
}

export function hitChecker(player, checker) {
  return { type: HIT_CHECKER, player, checker }
}

export function replaceChecker(player, checker, position) {
  return { type: REPLACE_CHECKER, player, checker, position }
}

export function bearOffChecker(player, checker) {
  return { type: BEAR_OFF_CHECKER, player, checker }
}

export function resetCheckers() {
  return { type: RESET_CHECKERS }
}
