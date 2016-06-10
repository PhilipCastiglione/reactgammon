import React from 'react'

const Die = (props) => {
  return (
    <span className={(props.used)? "used" : ""}>
      {props.pips}
    </span>
  )
}

export default Die
