import {CHANGED} from '../types/calculation'

export const changed = calculation => ({
  type: CHANGED,
  payload: calculation
})
