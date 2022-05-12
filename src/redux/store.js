//crear mi store
import { createStore, applyMiddleware,configureStore } from 'redux';
//import thunk
import thunk from 'redux-thunk'
//redux-devtools
import { composeWithDevTools } from 'redux-devtools-extension';
//importar mis reducers
import allReducers from './reducers/indexReducers'

const store = configureStore(allReducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;



