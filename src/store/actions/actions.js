import * as ACTION_TYPES from './action_types'


export const add_player = (player) =>{
    console.log('player add',player)

    return {
        type: ACTION_TYPES.ADD_PLAYER,
        payload: player
    }
}

export const fetch_players = () => {
    return {
        type: ACTION_TYPES.FETCH_PLAYERS,
    }
}