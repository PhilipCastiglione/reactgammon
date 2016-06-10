import React from 'react'

const Player = (props) => {
  let name
  if (props.name) {
    name = <h3>{props.name}</h3>
  } else {
    name = <input
             placeholder="Player"
             onBlur={(e) => {props.updateName(e.target.value)}}
           />
  }

  return (
    <div className="player">
      {name}
      <p>Games won: {props.gamesWon}</p>
      <p>Stake won: {props.stakeWon} out of 5</p>
    </div>
  )
}

export default Player
