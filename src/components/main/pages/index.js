import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
// Components
import Home from './homepage/Home'
import ProtectedRoute from '../../route/ProtectedRoute'
import MyBooking from './mybooking/MyBooking'

class MainNavigator extends Component {
    render() {
        const { match } = this.props
        console.log(match.url)
        return (
            <Switch>
                <Route path={`${match.url}`} exact component={Home} />
                <ProtectedRoute path={`${match.url}mybooking`} component={MyBooking} />
            </Switch>
        )
    }
}

export default withRouter(MainNavigator)