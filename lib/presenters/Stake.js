import React from 'react'

const Stake = (props) => {
  let colour
  switch(props.lastDoubler) {
    case 0:
      colour = "white"
    case 1:
      colour = "red"
    default:
      colour = "black"
  }

  return (
    <span className={colour}>
      {props.stake}
    </span>
  )
}

export default Stake
