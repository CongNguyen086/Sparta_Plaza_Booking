import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
// Components
import Home from './homePage/Home'
import ProtectedRoute from '../../route/ProtectedRoute'
import MyBooking from './myBookingPage/MyBooking'
import RoomPage from './roomPage/RoomPage'
import BookingPage from './reservationPage/BookingPage'

class MainNavigator extends Component {
    render() {
        const { match } = this.props
        console.log(match.url)
        return (
            <Switch>
                <Route path={`${match.url}`} exact render={() => <Home />} />
                <Route path={`${match.url}rooms`} exact render={() => <RoomPage />} />
                <Route path={`${match.url}reservation`} component={() => <BookingPage />} />
                <ProtectedRoute path={`${match.url}mybooking`} component={() => <MyBooking />} />
            </Switch>
        )
    }
}

export default withRouter(MainNavigator)