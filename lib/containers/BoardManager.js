import React from 'react'
import { connect } from 'react-redux'

import { selectChecker, togglePlayer, rollDice, useDie } from '../actions/move'
import { moveChecker, hitChecker } from '../actions/players'
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
    selectChecker: (checker) => { dispatch(selectChecker(checker)) },
    togglePlayer: () => { dispatch(togglePlayer()) },
    rollDice: () => { dispatch(rollDice()) },
    useDie: (position) => { dispatch(useDie(position)) },
    moveChecker: (player, checker, position) => { dispatch(moveChecker(player, checker, position)) },
    hitChecker: (player, checker) => { dispatch(hitChecker(player, checker)) }
  }
}

const BoardManager = connect(mapStateToProps, mapDispatchToProps)(Board)

export default BoardManager
