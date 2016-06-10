import React from 'react'
import { connect } from 'react-redux'

import Players from '../presenters/Players'

const mapStateToProps = (state) => {
  return {
    players: state.players
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateName: (player, name) => {
      dispatch({
        type: 'UPDATE_NAME',
        player,
        name
      })
    }
  }
}

const PlayersManager = connect(mapStateToProps, mapDispatchToProps)(Players)

export default PlayersManager
