import React from 'react'
import axios from 'axios'
import config from '../config'

import { connect } from 'react-redux'

const handleSubmit = (e) => {
    e.preventDefault()



    axios.patch(`${config.API_ENDPOINT}/upate/`)
}


const TeamList = (props) => (

    
    
    <div>
        {console.log(props.countries)}
     <div>
        <h2>{props.country.team_name}</h2>
        {props.countries.length > 0 ?
          props.countries.map(tm => 
          (<div key={tm.id}>
                <h3>{tm.player_name}</h3>
                <h3>{tm.player_name}</h3>
            <form onSubmit={() => handleSubmit()}>
                <input type="text" placeholder="player name" />
                <button type="submit" >add player</button>
            </form>
           </div>
            )
        ) : null

        }
    </div>
        
    </div>
)

function mapStateToProps(state){
    return {
        countries: state.team_reducer.countries
    }
}

export default connect(mapStateToProps)(TeamList)