import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
// Components
import Login from '../auth/adminLogin/AdminLogin'
import AdminPages from './layout/AdminPages'

class AdminRoute extends Component {
    render() {
        const { match } = this.props
        return (
            <Switch>
                <Route path={`${match.url}/login`} exact component={Login} />
                <Route path={`${match.url}/admin`} component={AdminPages} />
            </Switch>
        )
    }
}

export default withRouter(AdminRoute)