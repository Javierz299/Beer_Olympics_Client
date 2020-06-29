import React, { Component } from 'react'

export class TeamForm extends Component {


    handleSubmit = (e) => {
        e.preventDefault()

        console.log('reached')
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
            </div>
        )
    }
}

export default TeamForm
