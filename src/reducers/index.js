import { combineReducers } from 'redux'
import cartState from './cartState.js'
import homeState from './homeState.js'

// Combining State of Cart and Home to maintain.
const rootReducer = combineReducers({
  cartState,
  homeState
});

export default rootReducer;