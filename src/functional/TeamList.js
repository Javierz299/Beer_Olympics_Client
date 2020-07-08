import React, { Component } from 'react'
import axios from 'axios'
import config from '../config'

import { connect } from 'react-redux'





// const makeTeam = (id,teamplayers) => {
//     axios.patch(`${config.API_ENDPOINT}/team/update/${id}`, teamPlayers)
//     .then(res => console.log("patch res",res))
// }


class TeamList extends Component {

    state = {
        currentTeam: 0
    }

    getTeamId = (id) => {
        this.setState({
            currentTeam: id
        })
    }

    makeTeam = (team) => {
        console.log(team)
        console.log(this.state.currentTeam)

        axios.patch(`${config.API_ENDPOINT}/team/update/${this.state.currentTeam}`,team)
            .then(res => console.log(res))
            .catch((err) => console.log(err))
    }

    handleListSubmit = (e) => {
        console.log("e",e)
        e.preventDefault()
        console.log('player_name',e.target.player_name.value)
        console.log('playertwo_name',e.target.playertwo_name.value)
       
        const teamPlayers = {
            player_name: e.target.player_name.value,
            playertwo_name: e.target.playertwo_name.value,
            playerthree_name: e.target.playerthree_name.value,
            playerfour_name: e.target.playertwo_name.value
        }
        this.makeTeam(teamPlayers)

        
    }
        
    
    render() {
        return (
            <div>
            {console.log(this.props.countries)}
         <div>
            <h2>{this.props.country.team_name}</h2>
            {this.props.countries.length > 0 ?
              
              <div key={this.props.country.id}>
                  {console.log(this.props.country.id)}
                    <form onSubmit={this.handleListSubmit}>
                        <input name="player_name" id={this.props.country.id} type="text" defaultValue={this.props.country.player_name ? this.props.country.player_name : null}/>
                        <input name="playertwo_name" id={this.props.country.id} type="text" defaultValue={this.props.country.playertwo_name ? this.props.country.playertwo_name : null}/>
                        <input name="playerthree_name" id={this.props.country.id} type="text" defaultValue={this.props.country.playerthree_name ? this.props.country.playerthree_name : null}/>
                        <input name="playerfour_name" id={this.props.country.id} type="text" defaultValue={this.props.country.playerfour_name ? this.props.country.playerfour_name : null}/>
                        <br/>
                        <button type="submit" onClick={() => this.getTeamId(this.props.country.id)} >add players</button>
                    </form>
               </div> : null
    
            }
        </div>
        
        </div>
        )
     }

}

function mapStateToProps(state){
    return {
        countries: state.team_reducer.countries,
        players: state.player_reducer.players
    }
}

export default connect(mapStateToProps)(TeamList)