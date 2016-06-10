import React from 'react'
import { connect } from 'react-redux'

import { rollDice } from '../actions/move'
import Dice from '../presenters/Dice'

const mapStateToProps = (state) => {
  return {
    dice: state.move.dice,
    activePlayer: state.move.activePlayer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    rollDice: () => { dispatch(rollDice()) }
  }
}

const DiceManager = connect(mapStateToProps, mapDispatchToProps)(Dice)

export default DiceManager
