import { playerReducer } from './player';
import { moveReducer } from './move';
import { gameReducer } from './game';

// combine all reducers here?
// set initial state here?

// TODO: this
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

export const reducer = (state, action) => {

}