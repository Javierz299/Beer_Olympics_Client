import React, { Component } from 'react'
import axios from 'axios'
import config from '../config'

import TeamList from '../functional/TeamList'

import * as ACTIONS from '../store/actions/actions'

import { connect } from 'react-redux'

class TeamForm extends Component {

    componentDidMount(){
        axios.get(`${config.API_ENDPOINT}/team/allteams`)
        .then(res => this.props.add_team(res.data))
        .catch((err) => console.log(err))
    }


    handleSubmit = (e) => {
        e.preventDefault()

        const { country } = e.target

        const teamData = {
            team_name: country.value
        }

        console.log(teamData)

        
        axios.post(`${config.API_ENDPOINT}/team/`, teamData)
          .then(team => this.props.add_team(team.data))
          .catch((err) => console.log(err))
            .then(() => axios.get(`${config.API_ENDPOINT}/team/allteams`)
            .then(res => this.props.add_team(res.data))
            .catch((err) => console.log(err)))



    }



    render() {
        return (
            //submit team. once team is submited should be able to render one slot per name added 
            // up to four total. ex.  mexico add.   mexico will render with one slot then another open slot after submission
            <div>
                team sign-up
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label id="country" >Country</label>
                        <input id="country" type="text" />
                    </div>
                    
                    <button type="submit" >submit</button>
                </form>
                <div>
                    {this.props.countries.length > 0 ?
                    this.props.countries.map(c =>
                        <TeamList 
                        country={c}
                        key={c.id}
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
        countries: state.team_reducer.countries
    }
}

function mapStateToDispatch(dispatch){
    return {
        add_team: (team) => dispatch(ACTIONS.add_team(team))
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(TeamForm)
