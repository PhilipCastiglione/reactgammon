import React from 'react'

import Player from './Player'

const Players = (props) => {
  let players = props.players.map((player, i) => {
    return <Player
             key={i}
             name={player.name}
             gamesWon={player.gamesWon}
             stakeWon={player.stakeWon}
           />
  })

  return (
    <section>
      {players}
    </section>
  )
}

export default Players