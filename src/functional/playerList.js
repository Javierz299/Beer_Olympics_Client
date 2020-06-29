import React from 'react'

const playerList = (props) => (

    <div>
    {console.log(props)}
    <li>{props.player.full_name}</li>
    </div>
)

export default playerList