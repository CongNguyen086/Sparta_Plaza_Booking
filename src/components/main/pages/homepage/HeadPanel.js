import React, { Component } from 'react'
import SlidePanel from './SlidePanel'
// Components
import CheckBookingPanel from '../checkBooking/CheckBookingPanel'

class HeadPanel extends Component {
    render() {
        return (
            <div className="vk-sparta-center-logo-slide">
                <div className="vk-slide">
                    {/* SlidePanel */}
                    <SlidePanel />

                    <div className="vk-booking-transparent-1">
                        <div className="container">
                            {/* Booking check form */}
                            <CheckBookingPanel />
                            <div className="clearfix" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HeadPanel