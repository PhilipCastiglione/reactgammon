import React from 'react'

const Slot = (props) => {
  let playerOneCheckers = props.playerOneCheckers.map((checker, i) => {
    return <div
             key={i}
             className="white checker">
            </div>
  })

  let playerTwoCheckers = props.playerTwoCheckers.map((checker, i) => {
    return <div
             key={i}
             className="red checker">
            </div>
  })

  return (
    <div>
      {playerOneCheckers}
      {playerTwoCheckers}
    </div>
  )
}

export default Slot
