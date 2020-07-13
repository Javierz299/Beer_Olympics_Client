import React, { Component } from 'react'
import axios from 'axios'
import config from '../config'

import * as ACTIONS from '../store/actions/actions'

import { connect } from 'react-redux'

class GameList extends Component {
    
    render(){
        return (
            <div>game sign-up</div>
        )
    }
}

function mapStateToProps(state){
    return {
        games: state.game_reducer.games,
        gameId: state.games_reducer.gameId,
        players: state.player_reducer.players
    }
}

function mapDispatchToProps(dispatch){
    return {
        add_game: (game) => dispatch(ACTIONS.add_game(game))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameList)