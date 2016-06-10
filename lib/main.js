import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { masterReducer } from './reducers/masterReducer'

import Root from './Root'

ReactDOM.render(
  <Provider store={createStore(masterReducer)}>
    <Root />
  </Provider>,
  document.getElementById('root')
)
