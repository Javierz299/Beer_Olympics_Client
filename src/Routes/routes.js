import React, { Component } from 'react'
import { connect } from 'react-redux'

import PlayerForm from '../containers/PlayerForm'

import history from '../utils/history'

import { Router, Route, Switch, Redircect } from 'react-router-dom'

class Routes extends Component {

    componentDidMount(){
        
    }


    render() {
        return (
            <div>
                
                <Router history={history}>
                    <Switch>
                        <Route exact path="/" render={() => <PlayerForm />} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default Routes
