import React from 'react'

const Button = (props) => {
  let button
  if (props.inProgress && props.activePlayer !== null) {
    button = <span></span>
  } else if (props.inProgress && props.activePlayer === null) {
    let onClick = () => {
      props.rollDice()
      props.setFirstPlayer()
    }
    button = <button onClick={onClick}>Roll again</button>
  } else {
    let onClick = () => {
      props.playGame()
      props.rollDice()
      props.setFirstPlayer()
    }
    button = <button onClick={onClick}>Play!</button>
  }

  return (
    <div className="button">
      {button}
    </div>
  )
}

export default Button
