import React from 'react'

const Slot = (props) => {
  let playerOneCheckers = props.playerOneCheckers.map((checker, i) => {
    return <span
             key={i}
             className="white checker">
             W
           </span>
  })

  let playerTwoCheckers = props.playerTwoCheckers.map((checker, i) => {
    return <span
             key={i}
             className="red checker">
             R
           </span>
  })

  return (
    <div className={props.className}
      onClick={props.onClick}>
      {props.num} - 
      [{playerOneCheckers}
      {playerTwoCheckers}]
    </div>
  )
}

export default Slot
