import * from '../actions/player'

const updateNameReducer = (state, action) => {
  let newPlayersState = state.players.map((player, index) => {
    if (index !== action.player) {
      return player
    }

    return {
      ...player,
      name: action.name
    }
  })

  return Object.assign({}, state, { players: newPlayersState })
}

const incrementGamesWonReducer = (state, action) => {
  let newPlayersState = state.players.map((player, index) => {
    if (index !== action.player) {
      return player
    }

    return {
      ...player,
      gamesWon: player.gameesWon + 1
    }
  })

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
