import PlayerReducer from './player_reducer'
import TeamReducer from './team_redecuer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    player_reducer: PlayerReducer,
    team_reducer:TeamReducer,
})

export default rootReducer