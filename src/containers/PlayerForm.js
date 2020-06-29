import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import config from '../config'
import history from '../utils/history'
import UserList from '../functional/UserList'


import * as ACTIONS from '../store/actions/actions'

//import UserList from '../functional/UserList'

export class PlayerForm extends Component {

    

    componentDidMount(){
        axios.get(`${config.API_ENDPOINT}/player/allplayers`)
            .then(res => this.props.add_player(res.data))
            .catch((err) => console.log(err))

            console.log(this.props.players)
    }

    

    handleSubmit = (e) => {
        e.preventDefault()
        const { full_name,password } = e.target
            const playerData = {
                full_name: full_name.value,
                password: password.value
            }

            axios.post(`${config.API_ENDPOINT}/player/`,playerData)
                .then(player => this.props.add_player(player.data) )
                .catch((err) => console.log(err))
                .then( res => history.replace('/teams'))


            
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h3>sign up</h3>
                      <div>
                        <label id="full_name" >full name:</label>
                        <input id="full_name" type="text" />
                      </div>
        
                      <div>
                        <label id="password" >password:</label>
                        <input  id="password" type="number" />
                      </div>
                      <button type="submit" >Submit</button>
                </form>
                <div>
                    {this.props.players.length > 0 ? 
                    this.props.players.map(p =>
                        <UserList 
                        player={p}
                        key={p.id}
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
        players: state.player_reducer.players
    }
}

function mapDispatchToProps(dispatch){
    return{
        add_player: (player) => dispatch(ACTIONS.add_player(player))
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(PlayerForm)
