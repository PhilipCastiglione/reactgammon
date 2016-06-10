import React from 'react'

import Die from './Die'

const Dice = (props) => {
  let side = (props.activePlayer === 0)? "left" : "right"
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
