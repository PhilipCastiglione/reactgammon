import React from 'react'
import { connect } from 'react-redux'

import Board from '../presenters/Board'

const mapStateToProps = (state) => {
  return {
    checkers: state.players.map(player => { return player.checkers }),
    dice: state.move.dice,
    activePlayer: state.move.activePlayer,
    selectedChecker: state.move.selectedChecker
  }
}

const BoardManager = connect(mapStateToProps)(Board)

export default BoardManager
