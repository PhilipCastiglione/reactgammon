import React from 'react'
import { connect } from 'react-redux'

import Players from '../presenters/Players'

const mapStateToProps = (state) => {
  return {
    players: state.players
  }
}

const PlayersManager = connect(mapStateToProps)(Players)

export default PlayersManager
