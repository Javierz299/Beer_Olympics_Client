import React from 'react'
import axios from 'axios'
import config from '../config'

import { connect } from 'react-redux'

const handleListSubmit = (e) => {
    e.preventDefault()
    console.log('player_name',e.target.player_name.value)
    console.log('playertwo_name',e.target.playertwo_name.value)



    // axios.patch(`${config.API_ENDPOINT}/update/`)
}


const TeamList = (props) => (

    
    
    <div>
        {console.log(props.countries)}
     <div>
        <h2>{props.country.team_name}</h2>
        {props.countries.length > 0 ?
          
          <div key={props.country.id}>
              {console.log(props.country.id)}
                <form onSubmit={handleListSubmit}>
                    <input name="player_name" id={props.country.id} type="text" value={props.country.player_name}/>
                    <input name="playertwo_name" id={props.country.id} type="text" value={props.country.playertwo_name}/>
                    <input name="playerthree_name" id={props.country.id} type="text" value={props.country.playerthree_name}/>
                    <input name="playerfour_name" id={props.country.id} type="text" value={props.country.playerfour_name}/>
                    <br/>
                    <button type="submit" onClick={() => console.log("id",props.country.id)} >add players</button>
                </form>
           </div> : null

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