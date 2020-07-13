import PlayerReducer from './player_reducer'
import TeamReducer from './team_redecuer'
import GameReducer from './game_reducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    player_reducer: PlayerReducer,
    team_reducer: TeamReducer,
    game_reducer: GameReducer,
})

export default rootReducer