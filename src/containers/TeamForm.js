import React, { Component } from 'react'

export class TeamForm extends Component {
    render() {
        return (
            <div>
                team sign-up
                <form>
                    <div>
                        <label id="country" >Country</label>
                        <input id="country" type="text" />
                    </div>
                    <div>
                        <label id="player_one" >player one</label>
                        <input id="player_one" type="text" />
                    </div>
                    <div>
                        <label id="player_two" >player two</label>
                        <input id="player_two" type="text" />
                    </div>
                    <div>
                        <label id="player_three" >player three</label>
                        <input id="player_three" type="text" />
                    </div>
                    <div>
                        <label id="player_four" >player four</label>
                        <input id="player_four" type="text" />
                    </div>
                </form>
            </div>
        )
    }
}

export default TeamForm
