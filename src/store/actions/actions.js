import * as ACTION_TYPES from './action_types'


export const add_player = (player) =>{

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

export const add_team = (team) => {
    return {
        type: ACTION_TYPES.ADD_TEAM,
        payload: team
    }
}

export const fetch_teams = () => {
    return {
        type: ACTION_TYPES.FETCH_TEAMS
    }
}