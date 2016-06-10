import React from 'react'

import Slot from './Slot'

const Board = (props) => {
  let playerOneCheckers = props.checkers[0]
  let playerTwoCheckers = props.checkers[1]

  let slots = []
  for(let i = 0; i < 24; i++) {
    slots.push(<Slot
                 key={i}
                 playerOneCheckers={playerOneCheckers.filter(c => {return c === i})}
                 playerTwoCheckers={playerTwoCheckers.filter(c => {return c === i})}
               />)
  }

  return (
    <section>
      {slots}
    </section>
  )
}

export default Board
