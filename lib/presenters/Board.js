import React from 'react'

import Slot from './Slot'
import EndSlot from './EndSlot'

const Board = (props) => {
  let slots = []
  let targetSlots = validMoves(props.checkers, props.activePlayer, props.selectedChecker, props.dice)
  for(let i = -1; i < 25; i++) {
    let onClick
    let className
    if (props.activePlayer === null) {
      onClick = null
      className = ""
    } else if (props.checkers[props.activePlayer][props.selectedChecker] === i) { 
      onClick = () => { props.selectChecker(null) }
      className = "selected"
    } else if(targetSlots.includes(i)) {
      onClick = () => { targetedMove(props, i) }
      className="targeted"
    } else if(props.activePlayer === 0 && props.checkers[0].includes(-1)) {
      // white must return hits
    } else if(props.activePlayer === 1 && props.checkers[1].includes(24)) {
      // red must return hits
    } else if (props.checkers[props.activePlayer].includes(i) && i >= 0 && i <=23) {
      onClick = () => { props.selectChecker(props.checkers[props.activePlayer].indexOf(i)) }
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
  let inRange = (targetSquare) => {
    return targetSquare >= 0 && targetSquare <= 23
  }
  let notBlocked = (targetSquare) => {
    return checkers[1 - activePlayer].filter((slot) => { return targetSquare === slot }).length <= 1
  }
  let bearingOff = (targetSquare) => {
    return targetSquare === -1 || targetSquare === 24
  }
  let canBearOff = (activePlayer, checkers) => {
    let min = (activePlayer === 0)? 18 : -1
    let max = (activePlayer === 0)? 24 : 5
    return checkers.filter(checker => { return checker >= min && checker <= max }).length === checkers.length
  }

  dice.forEach((die) => {
    let targetSquare = checkers[activePlayer][selectedChecker] + direction * die.pips
    if (notBlocked(targetSquare) &&
        inRange(targetSquare) ||
        bearingOff(targetSquare) &&
        canBearOff(activePlayer, checkers[activePlayer])) {
      validMoves.push(targetSquare)
    }
  })

  return validMoves
}

function targetedMove(props, i) {
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
    if (props.dice[0].pips === Math.abs(i - props.checkers[props.activePlayer][props.selectedChecker])) {
      props.useDie(0)
    } else {
      props.useDie(1)
    }
  }
}
