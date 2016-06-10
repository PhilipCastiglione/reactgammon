import React from 'react'

import Title from './Title'
import BoardManager from '../containers/BoardManager'
import Information from './Information'
import PlayersManager from '../containers/PlayersManager'

class Root extends React.Component {
  render() {
    return (
      <main>
        <Title />
        <BoardManager />
        <Information />
        <PlayersManager />
      </main>
    )
  }
}

export default Root
