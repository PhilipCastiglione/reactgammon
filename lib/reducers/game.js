import * from '../actions/game'

const initialState = {
  stake: 1,
  lastDoubler: null
}

const doubleStakeReducer = (state = {}, action) => {
 return Object.assign({}, state, { stake: state.stake * 2, lastDoubler: 1 - state.lastDoubler })
}

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case DOUBLE_STAKE:
      return Object.assign({}, state, { game: doubleStakeReducer(state, action) })
    default:
      return state
  }
}
