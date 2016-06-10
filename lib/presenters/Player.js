import React from 'react'

const Player = (props) => {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>Games won: {props.gamesWon}</p>
      <p>Stake won: {props.stakeWon} out of 5</p>
    </div>
  )
}

export default Player
