import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import * as ACTIONS from '../store/actions/actions'

//import UserList from '../functional/UserList'

export class PlayerForm extends Component {

    state = {
        players: [],
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { full_name, nickname, password } = e.target
            const playerData = {
                full_name: full_name.value,
                nickname: nickname.value,
                password: password.value
            }

            console.log(playerData)
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
                        <label id="nickname" >nickname:</label>
                        <input  id="nickname" type="text" />
                      </div>
                      <div>
                        <label id="password" >password:</label>
                        <input  id="password" type="number" />
                      </div>
                      <button type="submit" >Submit</button>
                </form>
                {/* {<UserList />} */}
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return{
        add_player: (player) => dispatch(ACTIONS.add_player(player))
    }
}



export default connect(null,mapDispatchToProps)(PlayerForm)
