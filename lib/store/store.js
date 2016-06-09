import { createStore } from 'redux'
import { masterReducer } from '../reducers/masterReducer'

export const store = createStore(masterReducer)
