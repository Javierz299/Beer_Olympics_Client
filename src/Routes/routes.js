import React, { Component } from 'react'
import { connect } from 'react-redux'

import PlayerForm from '../containers/PlayerForm'
import TeamForm from '../containers/TeamForm'
import Header from '../containers/header'

import history from '../utils/history'

import { Router, Route, Switch, Redircect } from 'react-router-dom'

class Routes extends Component {

    


    render() {
        return (
            <div>
                
                <Router history={history}>
                <Header />
                    <Switch>
                        <Route exact path="/" render={() => <PlayerForm />} />
                        <Route path="/teams" render={() => <TeamForm />} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default Routes
