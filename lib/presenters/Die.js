import React from 'react'

const Dice = (props) => {
  return (
    <span className={(props.used)? "used" : ""}>
      {props.pips}
    </span>
  )
}

export default Dice
