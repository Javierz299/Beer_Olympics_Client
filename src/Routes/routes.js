import React, { Component } from 'react'

import PlayerForm from '../containers/PlayerForm'
import TeamForm from '../containers/TeamForm'
import GameForm from '../containers/GameForm'
import Header from '../containers/header'

import history from '../utils/history'

import { Router, Route, Switch, } from 'react-router-dom'

class Routes extends Component {

    


    render() {
        return (
            <div>
                
                <Router history={history}>
                <Header />
                    <Switch>
                        <Route exact path="/" render={() => <PlayerForm />} />
                        <Route path="/teams" render={() => <TeamForm />} />
                        <Route path="/games" render={() => <GameForm />} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default Routes
