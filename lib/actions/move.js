export const ROLL_DICE = 'ROLL_DICE'
export const SWAP_DICE = 'SWAP_DICE'
export const USE_DIE = 'USE_DIE'
export const UNUSE_DIE = 'UNUSE_DIE'
export const TOGGLE_PLAYER = 'TOGGLE_PLAYER'

export function rollDice() {
  return { type: ROLL_DICE }
}

export function swapDice() {
  return { type: SWAP_DICE }
}

export function useDie(position) {
  return { type: USE_DIE, position }
}

export function unuseDie(position) {
  return { type: UNUSE_DIE, position }
}

export function togglePlayer() {
  return { type: TOGGLE_PLAYER }
}
