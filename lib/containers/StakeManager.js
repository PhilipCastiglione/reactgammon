import React from 'react'
import { connect } from 'react-redux'

import Stake from '../presenters/Stake'

const mapStateToProps = (state) => {
  return {
    stake: state.game.stake,
    lastDoubler: state.game.lastDoubler
  }
}

const StakeManager = connect(mapStateToProps)(Stake)

export default StakeManager
