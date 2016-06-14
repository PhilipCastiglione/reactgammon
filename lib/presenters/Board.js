import React from 'react'

import Slot from './Slot'

const Board = (props) => {
  let slots = []
  let targetSlots = validMoves(props.checkers, props.activePlayer, props.selectedChecker, props.dice)
  let selectableCheckers = []

  const playerOneWithHitCheckers = () => {
    return props.activePlayer === 0 && props.checkers[0].includes(-1)
  }

  const playerTwoWithHitCheckers = () => {
    return props.activePlayer === 1 && props.checkers[1].includes(24)
  }

  for(let i = -1; i < 25; i++) {
    let onClick
    let className
    if (props.activePlayer === null) {
      onClick = null
      className = ""
    } else if (props.checkers[props.activePlayer][props.selectedChecker] === i) { 
      onClick = () => { props.selectChecker(null) }
      className = "selected"
      selectableCheckers.push(props.checkers[props.activePlayer].indexOf(i))
    } else if(targetSlots.includes(i)) {
      onClick = () => { targetedMove(props, i) }
      className="targeted"
    } else if(playerOneWithHitCheckers() && i === -1 ||
              playerTwoWithHitCheckers() && i === 24 ||
              !playerOneWithHitCheckers() &&
              !playerTwoWithHitCheckers() &&
              props.checkers[props.activePlayer].includes(i)) {
        onClick = () => { props.selectChecker(props.checkers[props.activePlayer].indexOf(i)) }
        className = ""
        selectableCheckers.push(props.checkers[props.activePlayer].indexOf(i))
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

  console.log(selectableCheckers)
  console.log(props)
  let anyValidMoves = selectableCheckers.map(c => { return validMoves(props.checkers, props.activePlayer, c, props.dice).length })
                                        .some(a => { return a > 0 })

  console.log(anyValidMoves)

  if (props.activePlayer !== null && !anyValidMoves) {
    // this is not firing right
    console.log('no valid moves')
    console.log(new Date())
    // we can't do the below because we can't modify state here in the render method
    //props.togglePlayer()
    //props.rollDice()
    // instead we should put something to the screen and require user input
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
