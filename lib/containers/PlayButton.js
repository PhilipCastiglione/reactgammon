import React from 'react'
import { connect } from 'react-redux'

import { playGame } from '../actions/game'
import Button from '../presenters/Button'

const mapStateToProps = (state) => {
  return { inProgress: state.game.inProgress }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => { dispatch(playGame()) }
  }
}

const PlayButton = connect(mapStateToProps, mapDispatchToProps)(Button)

export default PlayButton
