const initialState = [
  {
    name: null,
    gamesWon: 0,
    stakeWon: 0,
    checkers: [23, 23, 12, 12, 12, 12, 12, 7, 7, 7, 5, 5, 5, 5, 5]
  },
  {
    name: null,
    gamesWon: 0,
    stakeWon: 0,
    checkers: [0, 0, 11, 11, 11, 11, 11, 16, 16, 16, 18, 18, 18, 18, 18]
  }
]

const updateName = (state = [], action) => {
  return state.map((player, i) => {
    return (action.player === i)? { ...player, name: action.name } : player
  })
}

const incrementGamesWon = (state = [], action) => {
  return state.map((player, i) => {
    return (action.player === i)? { ...player, gamesWon: player.gameesWon + 1 } : player
  })
}

const addStakeWon = (state = [], action) => {
  return state.map((player, i) => {
    return (action.player === i)? { ...player, stakeWon: player.stakeWon + action.stake } : player
  })
}

const moveChecker = (state = [], action) => {
  return state.map((player, i) => {
    if (action.player === i) {
      return { ...player, checkers: player.checkers.map((checker, i2)  => {
          return (action.checker === i2)? action.position : checker
        })
      }
    } else {
      return player
    }
  })
}

const resetCheckers = (state = [], action) => {
  return state.map((player, i) => {
    return { ...player, checkers: initialState[i].checkers }
  })
}

export const players = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_NAME':
      return Object.assign([], state, updateName(state, action) )
    case 'INCREMENT_GAMES_WON':
      return Object.assign([], state, incrementGamesWon(state, action) )
    case 'ADD_STAKE_WON':
      return Object.assign([], state, addStakeWon(state, action) )
    case 'MOVE_CHECKER':
      return Object.assign([], state, moveChecker(state, action) )
    case 'BEAR_OFF_CHECKER':
      return Object.assign([], state, bearOffChecker(state, action) )
    case 'RESET_CHECKERS':
      return Object.assign([], state, resetCheckers(state, action) )
    default:
      return state
  }
}
