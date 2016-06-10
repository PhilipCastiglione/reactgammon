export const doubleStake = (player) => {
  return { type: 'DOUBLE_STAKE', player }
}

export const playGame = () => {
  return { type: 'PLAY_GAME' }
}
