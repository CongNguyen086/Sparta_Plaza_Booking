import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
// Components
import Login from './auth/login/index'
import MainPages from './main/index'

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route path='/login' component={Login} />
                <Route path='/' component={MainPages} />
            </Switch>
        )
    }
}

export default Routes