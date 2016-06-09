import * from '../actions/player'

const updateNameReducer = (state, action) => {
  return state.map((player, index) => {
    return (index !== action.player)? player : { ...player, name: action.name }
  })
}

const incrementGamesWonReducer = (state, action) => {
  return state.map((player, index) => {
    return (index !== action.player)? player :  { ...player, gamesWon: player.gameesWon + 1 }
  })
}

export const playerReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_NAME:
      return Object.assign({}, state, { players: updateNameReducer(state.players, action) })
    case INCREMENT_GAMES_WON:
      return Object.assign({}, state, { players: incrementGamesWonReducer(state.players, action) })
    case ADD_STAKE_WON:
    case MOVE_CHECKER:
    case HIT_CHECKER:
    case REPLACE_CHECKER:
    case BEAR_OFF_CHECKER:
    case RESET_CHECKERS:
    default:
      return state
  }
}
