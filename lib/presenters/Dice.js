import React from 'react'

import Die from './Die'

const Dice = (props) => {
  if (props.dice.length === 0 ) {
    props.rollDice()
  }
  let side
  switch (props.activePlayer) {
    case 0:
      side = "left"
    case 1:
      side = "right"
    default:
      side = "split"
  }
  let dice = props.dice.map((die, i) => {
    return <Die
             key={i}
             pips={die.pips}
             used={die.used}
           />
  })

  return (
    <span className={side}>
      {dice}
    </span>
  )
}

export default Dice
