import React from 'react'

import Slot from './Slot'

const Board = (props) => {
  let slots = []
  let targetSlots = validMoves(props.checkers, props.activePlayer, props.selectedChecker, props.dice)
  for(let i = 0; i < 24; i++) {
    let onClick
    let className
    if (props.activePlayer === null) {
      onClick = null
      className = ""
    } else if (props.checkers[props.activePlayer][props.selectedChecker] === i) { 
      onClick = () => {
        props.selectChecker(null)
      }
      className = "selected"
    } else if(targetSlots.includes(i)) {
      onClick = () => {
        props.selectChecker(null)
        let hitChecker = props.checkers[1 - props.activePlayer].indexOf(i)
        if (hitChecker !== -1) {
          props.hitChecker(1 - props.activePlayer, hitChecker)
        }
        props.moveChecker(props.activePlayer, props.selectedChecker, i)
        if (props.dice.length === 1 && !props.dice[0].double) {
          props.togglePlayer()
          props.rollDice()
        } else {
          if (props.dice[0].pips === Math.abs(i - props.selectedChecker)) {
            props.useDie(0)
          } else {
            props.useDie(1)
          }
        }
      }
      className="targeted"
    } else if (props.checkers[props.activePlayer].includes(i)) {
      onClick = () => {
        props.selectChecker(props.checkers[props.activePlayer].indexOf(i))
      }
      className = ""
    }
    slots.push(<Slot
                 key={i}
                 num={i}
                 playerOneCheckers={props.checkers[0].filter(c => {return c === i})}
                 playerTwoCheckers={props.checkers[1].filter(c => {return c === i})}
                 className={className}
                 onClick={onClick}
               />)
  }

  return (
    <section className="board">
      {slots}
    </section>
  )
}

export default Board

// move these to a business logic service
function validMoves(checkers, activePlayer, selectedChecker, dice) {
  if (activePlayer === null || selectedChecker === null) {
    return []
  }

  let validMoves = []

  let direction = (activePlayer === 0)? 1 : -1
  let opposingPlayer = 1 - activePlayer

  dice.forEach((die) => {
    let targetSquare = checkers[activePlayer][selectedChecker] + direction * die.pips
    if (checkers[opposingPlayer].filter((slot) => { return targetSquare === slot }).length <= 1) {
      validMoves.push(targetSquare)
    }
  })

  return validMoves
}
