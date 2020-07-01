import React from 'react'
import axios from 'axios'
import config from '../config'

import { connect } from 'react-redux'

const handleListSubmit = (e) => {
    e.preventDefault()
    console.log('clicked')


    // axios.patch(`${config.API_ENDPOINT}/update/`)
}


const TeamList = (props) => (

    
    
    <div>
        {console.log(props.countries)}
     <div>
        <h2>{props.country.team_name}</h2>
        {props.countries.length > 0 ?
          props.countries.map(tm => 
          (
          <div key={tm.id}>
                <h3>{tm.player_name ? tm.player_name : 'open'}</h3>
           </div>
            )
        ) && <form onSubmit={handleListSubmit}>
        <input type="text" placeholder="player name" />
        <button type="submit">add player</button>
    </form> : null

        }
    </div>
    
    </div>
)

function mapStateToProps(state){
    return {
        countries: state.team_reducer.countries,
        players: state.player_reducer.players
    }
}

export default connect(mapStateToProps)(TeamList)