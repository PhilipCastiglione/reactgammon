const initialState = {
  stake: 1,
  lastDoubler: null
}

const doubleStake = (state = {}, action) => {
 return Object.assign({}, state, { stake: state.stake * 2, lastDoubler: 1 - state.lastDoubler })
}

export const game = (state = initialState, action) => {
  switch (action.type) {
    case 'DOUBLE_STAKE':
      return Object.assign({}, state, doubleStake(state, action) )
    default:
      return state
  }
}
