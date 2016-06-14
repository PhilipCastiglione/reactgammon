import React from 'react'

const Die = (props) => {
  return (
    <span className={props.className}>
      {props.pips}
    </span>
  )
}

export default Die
