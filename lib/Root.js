import React from 'react'

import Title from './Title'
import Board from './Board'
import Information from './Information'
import Player from './Player'

class Root extends React.Component {
  render() {
    return (
      <div>
        <Title />
        <Board />
        <Information />
        <Player />
        <Player />
      </div>
    )
  }
}

export default Root
