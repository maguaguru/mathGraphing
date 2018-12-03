import Immutable from 'seamless-immutable'
import { createReducer, createActions } from 'reduxsauce'

export const INITIAL_STATE = Immutable({
    test: 'test'
})

const { Types, Creators } = createActions({
    loadGridProperties: ['grid'],
})

export const ContextTypes = Types
export default Creators

export const loadGridProperties = (state, { grid }) =>
  state.merge({
      grid
  })

export const reducer = createReducer(INITIAL_STATE, {
    [Types.LOAD_GRID_PROPERTIES]: loadGridProperties
})