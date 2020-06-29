import PlayerReducer from './player_reducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    player_reducer: PlayerReducer,
})

export default rootReducer