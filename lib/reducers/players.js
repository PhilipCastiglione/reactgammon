import UPDATE_NAME from '../actions/players'
import INCREMENT_GAMES_WON from '../actions/players'
import ADD_STAKE_WON from '../actions/players'
import MOVE_CHECKER from '../actions/players'
import HIT_CHECKER from '../actions/players'
import REPLACE_CHECKER from '../actions/players'
import BEAR_OFF_CHECKER from '../actions/players'
import RESET_CHECKERS from '../actions/players'

const initialState = [
  {
    name: "Player 1",
    gamesWon: 0,
    stakeWon: 0,
    checkers: [23, 23, 12, 12, 12, 12, 12, 7, 7, 7, 5, 5, 5, 5, 5]
  },
  {
    name: "Player 2",
    gamesWon: 0,
    stakeWon: 0,
    checkers: [0, 0, 11, 11, 11, 11, 11, 16, 16, 16, 18, 18, 18, 18, 18]
  }
]

const updateNameReducer = (state = [], action) => {
  return state.map((player, index) => {
    return (index !== action.player)? player : { ...player, name: action.name }
  })
}

const incrementGamesWonReducer = (state = [], action) => {
  return state.map((player, index) => {
    return (index !== action.player)? player :  { ...player, gamesWon: player.gameesWon + 1 }
  })
}

export const playersReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NAME:
      return Object.assign({}, state, { players: updateNameReducer(state, action) })
    case INCREMENT_GAMES_WON:
      return Object.assign({}, state, { players: incrementGamesWonReducer(state, action) })
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
