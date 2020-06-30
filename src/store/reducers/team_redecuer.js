import * as ACTION_TYPES from '../actions/action_types'

const initialState = {
    countries: [],
    
}

const TeamReducer = (state = initialState, action) => {
    switch(action.type){
        case ACTION_TYPES.ADD_TEAM:
            return {
                ...state,
                countries: action.payload
            }

        case ACTION_TYPES.FETCH_TEAMS:
            return {
                ...state,
            }
            default:
                return state
    }
}

export default TeamReducer