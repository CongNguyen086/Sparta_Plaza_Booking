import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
// Components
import GuestRoute from './main'
import AdminRoute from './admin'

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route path='/admin' component={AdminRoute} />
                <Route path='/' component={GuestRoute} />
            </Switch>
        )
    }
}

export default Routes