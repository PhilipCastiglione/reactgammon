import React from 'react'
import { connect } from 'react-redux'

import Dice from '../presenters/Dice'

const mapStateToProps = (state) => {
  return {
    dice: state.move.dice,
    activePlayer: state.move.activePlayer
  }
}

const DiceManager = connect(mapStateToProps)(Dice)

export default DiceManager
