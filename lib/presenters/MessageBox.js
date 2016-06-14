import React from 'react'

const MessageBox = (props) => {
  return (
    <div className="message-box">
      <p>{props.message}</p>
      <button onClick={props.onClick}>OK</button>
    </div>
  )
}

export default MessageBox
