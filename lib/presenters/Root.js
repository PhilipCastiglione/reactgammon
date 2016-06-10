import React from 'react'

import Title from './Title'
import Board from '../Board'
import Information from './Information'
import PlayersManager from '../containers/PlayersManager'

class Root extends React.Component {
  render() {
    return (
      <main>
        <Title />
        <Board />
        <Information />
        <PlayersManager />
      </main>
    )
  }
}

export default Root
