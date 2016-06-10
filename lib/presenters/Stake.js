import React from 'react'

const Stake = (props) => {
  let colour
  switch (props.lastDoubler) {
    case 0:
      colour = "white"
      break
    case 1:
      colour = "red"
      break
    default:
      colour = "black"
  }

  return (
    <div className={"stake " + colour}>
      Current stake: {props.stake}
    </div>
  )
}

export default Stake
