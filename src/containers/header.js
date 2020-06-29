import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class header extends Component {
    render() {
        return (
            <div>
                Beer Olympics 2020
                <div>
                <Link to="/"><button>players</button></Link>
                <Link to="/teams"><button>teams</button></Link>

                </div>
            </div>
        )
    }
}

export default header
