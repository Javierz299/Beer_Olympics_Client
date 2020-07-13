import React, { Component } from 'react'
import axios from 'axios'
import config from '../config'

import GameList from '../functional/GameList'

import * as ACTIONS from '../store/actions/actions'

import { connect } from 'react-redux'

class GameForm extends Component {



    handleSubmit = (e) => {
        e.preventDefault()

        const { game } = e.target

        const gameData = {
            game_name: game.value
        }

        console.log(gameData)

        


    }




    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label id="game" >Game</label>
                        <input id="game" type="text" />
                    </div>
                    <button type="submit">sumbit</button>
                </form>
                <div>
                    {this.props.games.length > 0 ? 
                    this.props.games.map(g =>
                       <GameList
                       game={g}
                        key={g.id}
                       /> 
                        ) : null
                }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        games: state.game_reducer.games
    }
}

function mapStateToDispatch(dispatch){
    return {
        add_team: (game) => dispatch(ACTIONS.add_game(game))
    }
}


export default connect(mapStateToProps,mapStateToDispatch)(GameForm)
