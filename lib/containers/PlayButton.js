import React from 'react'
import { connect } from 'react-redux'

import { playGame } from '../actions/game'
import { rollDice, setFirstPlayer } from '../actions/move'
import Button from '../presenters/Button'

const mapStateToProps = (state) => {
  return { 
    inProgress: state.game.inProgress,
    activePlayer: state.move.activePlayer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => { dispatch(playGame()) },
    rollDice: () => { dispatch(rollDice()) },
    setFirstPlayer: () => { dispatch(setFirstPlayer()) }
  }
}

const PlayButton = connect(mapStateToProps, mapDispatchToProps)(Button)

export default PlayButton
