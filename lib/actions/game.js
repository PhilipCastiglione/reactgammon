export const DOUBLE_STAKE = 'DOUBLE_STAKE'

export function doubleStake(player) {
  return { type: DOUBLE_STAKE, player }
}
