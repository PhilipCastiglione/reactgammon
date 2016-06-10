import React from 'react'

import Title from './Title'
import Board from '../Board'
import Information from './Information'
import Player from '../Player'


class Root extends React.Component {
  render() {
    return (
      <main>
        <Title />
        <Board />
        <Information />
        <Player />
        <Player />
      </main>
    )
  }
}

export default Root
