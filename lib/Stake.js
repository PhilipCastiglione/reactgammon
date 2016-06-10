import React from 'react'

class Stake extends React.Component {
  render() {
    let colour;
    if (this.props.lastDoubler === 0) {
      colour = "white"
    } else if (this.props.lastDoubler === 1) {
      colour = "red"
    } else {
      colour = "black"
    }

    return (
      <span className={colour}>
        {this.props.stake}
      </span>
    )
  }
}

export default Stake
