import * from '../actions/game'

const doubleStakeReducer = (state, action) => {
  let newStake = state.game.stake * 2
  let newDoubler = 1 - state.game.lastDoubler
  let newGameState = { stake: newStake, lastDoubler: newDoubler }

  return Object.assign({}, state, { game: newGameState })
}

export const gameReducer = (state, action) => {
  switch (action.type) {
    case DOUBLE_STAKE:
      return doubleStakeReducer(action, state)
    default:
      return state
  }
}
