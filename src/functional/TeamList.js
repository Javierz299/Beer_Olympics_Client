import React from 'react'

import { connect } from 'react-redux'

const add_slot = () => {
    console.log('clicked')
    return (
        <div>
            <input type="text" placeholder="player name" />
        </div>
    )
}


const TeamList = (props) => (

    
    
    <div>
        {console.log(props.countries)}
     <div>
        <h2>{props.country.team_name}</h2>
        {props.countries.length > 0 ?
          props.countries.map(tm => 
          (<div>
          <h3 key={tm.id} >{tm.player_name}</h3>
            <h3 key={tm.id}>{tm.player_name}</h3>
           </div>
            )
        ) : null

        }
        <form>
        <input type="text" placeholder="player name" />
        <button onClick={() => add_slot()}>add player</button>
        </form>
    </div>
        
    </div>
)

function mapStateToProps(state){
    return {
        countries: state.team_reducer.countries
    }
}

export default connect(mapStateToProps)(TeamList)