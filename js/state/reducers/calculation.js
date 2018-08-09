import createReducer from '../utils/createReducer'
import {CHANGED} from '../types/calculation'

const initialState = ''

export default createReducer(initialState)({
  [CHANGED]: (initialState, {payload}) => payload
})
