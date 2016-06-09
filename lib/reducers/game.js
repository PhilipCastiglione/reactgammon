import * from '../actions/game'

const doubleStakeReducer = (state, action) => {
 return Object.assign({}, state, { stake: state.stake * 2, lastDoubler: 1 - state.lastDoubler })
}

export const gameReducer = (state, action) => {
  switch (action.type) {
    case DOUBLE_STAKE:
      return Object.assign({}, state, { game: doubleStakeReducer(state.game, action) })
    default:
      return state
  }
}
