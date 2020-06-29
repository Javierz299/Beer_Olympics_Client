import React from 'react'

const TeamList = (props) => (
    
    <div>
     {console.log('props',props)}
        <li>{props.country.team_name}</li>
    </div>
)

export default TeamList