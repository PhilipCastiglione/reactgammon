import React from 'react'

const Button = (props) => {
  let button
  if (props.inProgress) {
    button = <span></span>
  } else {
    button = <button onClick={props.onClick}>Play!</button>
  }

  return (
    <div className="button">
      {button}
    </div>
  )
}

export default Button
