import React from 'react'

const Dice = (props) => {
  let side = (props.activePlayer === 0)? "left" : "right"
  let dice = props.dice.map(die => {
    return <Die
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
