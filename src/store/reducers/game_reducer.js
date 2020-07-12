import * as ACTIONS_TYPES from '../actions/action_types'

const initialState = {
    games: [],
}

const GameReducer = (state = initialState, action) => {
    switch(action.type){
        case ACTIONS_TYPES.ADD_GAME:
            return {
                ...state,
                games: action.payload
            }
            default:
                return {
                    ...state,
                }
    }
}

export default GameReducer