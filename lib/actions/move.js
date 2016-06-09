export const rollDice = () => {
  return { type: 'ROLL_DICE' }
}

export const swapDice = () => {
  return { type: 'SWAP_DICE' }
}

export const useDie = (position) => {
  return { type: 'USE_DIE', position }
}

export const unuseDie = (position) => {
  return { type: 'UNUSE_DIE', position }
}

export const togglePlayer = () => {
  return { type: 'TOGGLE_PLAYER' }
}
