import Immutable from 'seamless-immutable'
import { createReducer, createActions } from 'reduxsauce'
import { loadGridProperties } from './GridReducer';

export const INITIAL_STATE = Immutable({
    isMouseMove: false,
    mouseX: undefined,
    mousY: undefined,
    realMouseX:undefined,
    realMouseY: undefined
})

const { Types, Creators } = createActions({
    setMouseCoordinates: ['x', 'y']
})

export const ContextTypes = Types
export default Creators

export const setMouseCoordinates = (state, { x, y }) =>
  state.merge({
      mouseX: x,
      mouseY: y
  })

export const reducer = createReducer(INITIAL_STATE, {
    [Types.SET_MOUSE_COORDINATES]: setMouseCoordinates
})