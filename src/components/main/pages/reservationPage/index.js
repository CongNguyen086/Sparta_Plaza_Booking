import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
// Components
import StepBar from './StepBar'
import BookingPanel from './BookingPanel'
import SelectRoomProcess from './selectRoom/SelectRoomProcess'
import MakeBookingProcess from './makeReservation/MakeBookingProcess'

// const roomPhoto = [room_1, room_2, room_3, room_4, room_5, room_6]

class BookingPage extends Component {
    render() {
        const { match } = this.props
        return (
            <section className="site-content-area">
                <BookingPanel />
                <div className="vk-room-list-content vk-select-room-content vk-make-a-reservation-content"
                    style={{ paddingTop: 60 }}
                >
                    <div className="container">
                        <StepBar stepNumber={1} />
                        <Switch>
                            <Route path={`${match.url}/selectroom`} exact component={SelectRoomProcess} />
                            <Route path={`${match.url}/makereservation`} exact component={MakeBookingProcess} />
                        </Switch>
                    </div>
                </div>
            </section>
        )
    }
}

export default withRouter(BookingPage)