import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as ACTIONS from '../store/actions/actions'

//import UserList from '../functional/UserList'

export class PlayerForm extends Component {

    state = {
        players: [],
    }


    render() {
        return (
            <div>
                <form>
                    <h3>sign up</h3>
                    <label>full name:</label>
                    <input type="text" />
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
