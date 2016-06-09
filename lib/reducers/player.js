import * from '../actions/player'

const updateNameReducer = (state, action) => {
  let newPlayersState = []
  newPlayersState[action.player] = Object.assign({}, state.players[action.player], { name: action.name })
  newPlayersState[1 - action.player] = state.players[1 - action.player]

  return Object.assign({}, state, { players: newPlayersState })
}

const incrementGamesWonReducer = (state, action) => {
  let newPlayersState = []
  newPlayersState[action.player] = Object.assign({}, state.players[action.player], { gamesWon: state.players[action.player]['gamesWon'] + 1 })
  newPlayersState[1 - action.player] = state.players[1 - action.player]

  return Object.assign({}, state, { players: newPlayersState })
}

export const playerReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_NAME:
      return updateNameReducer(action, state)
    case INCREMENT_GAMES_WON:
      return incrementGamesWonReducer(action, state)
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
