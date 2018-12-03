import { combineReducers } from 'redux'
import { reducer as GridReducer } from './GridReducer'

export const mainReducer =  combineReducers({
    grid: GridReducer
   })


