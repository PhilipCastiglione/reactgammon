import React from 'react'
import { connect } from 'react-redux'

import { selectChecker } from '../actions/move'
import Board from '../presenters/Board'

const mapStateToProps = (state) => {
  return {
    checkers: state.players.map(player => { return player.checkers }),
    dice: state.move.dice.filter(die => { return !die.used}),
    activePlayer: state.move.activePlayer,
    selectedChecker: state.move.selectedChecker
  }
}

const mapDispatchToProps = (dispatch) => {
  return  {
    selectChecker: (checker) => { dispatch(selectChecker(checker)) }
  }
}

const BoardManager = connect(mapStateToProps, mapDispatchToProps)(Board)

export default BoardManager
