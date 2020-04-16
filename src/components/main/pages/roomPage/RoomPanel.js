import React, { Component } from 'react'
import CheckBookingPanel from '../checkBooking/CheckBookingPanel'

class RoomPanel extends Component {
    render() {
        return (
            <div className="vk-gallery-grid-full-banner">
                <div className="vk-about-banner">
                    <div className="vk-about-banner-destop">
                        <div className="vk-banner-img" />
                        <div className="vk-about-banner-caption" style={{ top: '30%' }}>
                            <h2 className="animated fadeInUp slide-delay-2">Sparta Room</h2>
                        </div>
                    </div>
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

export default RoomPanel