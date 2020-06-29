import * as ACTION_TYPES from '../actions/action_types'


const initialState = {
    players: [],
}


const UserReducer = (state = initialState, action) => {
    switch(action.type){
        case ACTION_TYPES.ADD_PLAYER:
            return {
                ...state,
                players: action.payload,
            }
        default: 
        return state
    }
}

export default UserReducer