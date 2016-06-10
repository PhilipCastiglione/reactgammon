import React from 'react'

import Die from './Die'

const Dice = (props) => {
  let side
  switch (props.activePlayer) {
    case 0:
      side = "left"
      break
    case 1:
      side = "right"
      break
    default:
      side = "split"
      break
  }
  let dice = props.dice.map((die, i) => {
    return <Die
             key={i}
             pips={die.pips}
             used={die.used}
           />
  })

  return (
    <div className={side}>
      {dice}
    </div>
  )
}

export default Dice
