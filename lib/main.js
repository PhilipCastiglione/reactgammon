import React from 'react'
import ReactDOM from 'react-dom'
import Root from './Root'
import store from './store/store'

const render = () => {
  ReactDOM.render(<Root />, document.getElementById('root'))
}

store.subscribe(render)
render()

