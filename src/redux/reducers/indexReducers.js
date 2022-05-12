import { combineReducers } from 'redux'
import { sessionReducer } from './sessionReducer'


const allReducers = combineReducers({
    sessionReducer

});


export default allReducers;