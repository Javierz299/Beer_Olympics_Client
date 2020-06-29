import PlayerReducer from './user-reducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    player_reducer: PlayerReducer,
})

export default rootReducer