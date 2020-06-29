import React from 'react'

const UserList = (props) => (

    <div>
    {console.log(props)}
    <li>{props.player.full_name}</li>
    </div>
)

export default UserList