const initialState = {
  stake: 1,
  lastDoubler: null,
  inProgress: false
}

const doubleStake = (state = {}, action) => {
 return Object.assign({}, state, { stake: state.stake * 2, lastDoubler: 1 - state.lastDoubler })
}

const playGame = (state = {}, action) => {
 return Object.assign({}, state, { inProgress: true })
}

export const game = (state = initialState, action) => {
  switch (action.type) {
    case 'DOUBLE_STAKE':
      return Object.assign({}, state, doubleStake(state, action) )
    case 'PLAY_GAME':
      return Object.assign({}, state, playGame(state, action) )
    default:
      return state
  }
}
