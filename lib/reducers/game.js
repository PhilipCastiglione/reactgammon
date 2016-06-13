const initialState = {
  stake: 1,
  lastDoubler: null,
  inProgress: false
}

const doubleStake = (state) => {
 return { stake: state.stake * 2, lastDoubler: 1 - state.lastDoubler }
}

const playGame = () => {
 return { inProgress: true }
}

export const game = (state = initialState, action) => {
  switch (action.type) {
    case 'DOUBLE_STAKE':
      return Object.assign({}, state, doubleStake(state) )
    case 'PLAY_GAME':
      return Object.assign({}, state, playGame() )
    default:
      return state
  }
}
