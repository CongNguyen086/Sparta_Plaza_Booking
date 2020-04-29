import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
// Components
import Login from '../auth/login/GuestLogin'
import MainPages from './MainPages'

class GuestRoute extends Component {
    render() {
        const { match } = this.props
        return (
            <Switch>
                <Route path={`${match.url}login`} exact component={Login} />
                <Route path={`${match.url}`} component={MainPages} />
            </Switch>
        )
    }
}

export default withRouter(GuestRoute)