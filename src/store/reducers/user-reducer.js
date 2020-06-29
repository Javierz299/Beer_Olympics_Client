import * as ACTION_TYPES from '../actions/action_types'


const initialState = {
    current_player: null,
}


const UserReducer = (state = initialState, action) => {
    switch(action.type){
        case ACTION_TYPES.ADD_PLAYER:
            return {
                ...state,
                current_player: action.payload,
            }
        default: 
        return state
    }
}

export default UserReducer