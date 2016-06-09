import * from '../actions/game'

const doubleStakeReducer = (state, action) => {
  let newGameState = Object.assign({}, state.game, { stake: state.game.stake * 2,
                                                     lastDoubler: 1 - state.game.lastDoubler })

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
