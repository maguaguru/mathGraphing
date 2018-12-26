import { combineReducers } from 'redux'
import { reducer as GridReducer } from './GridReducer'
import { reducer as WorkAreaReducer } from './WorkAreaReducer'

export const mainReducer =  combineReducers({
    grid: GridReducer,
    workarea: WorkAreaReducer
   })


