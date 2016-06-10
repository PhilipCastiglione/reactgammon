import React from 'react'

import StakeManager from '../containers/StakeManager'
import DiceManager from '../containers/DiceManager'
import PlayButton from '../containers/PlayButton'

const Information = () => {
  return (
    <section>
      <PlayButton />
      <DiceManager />
      <StakeManager />
    </section>
  )
}

export default Information
