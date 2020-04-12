import React, { Component } from 'react'
import SlidePanel from './SlidePanel'
// Components
import CheckBookingPanel from '../CheckBookingPanel'

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
                            {/* <form className='form-horizontal  booking-hotel-all'>
                                <ul>
                                    <li>
                                        <h4>Check - In</h4>
                                        <div className="input-group date date-check-in" data-date="12-02-2017" data-date-format="mm-dd-yyyy">
                                            <input id="checkIn" name="checkInDefault" className="form-control" type="text" defaultValue="" />
                                            <span className="input-group-addon btn"><span className="ti-calendar" id="ti-calendar1" /></span>
                                        </div>
                                    </li>
                                    <li>
                                        <h4>Check - Out</h4>
                                        <div className="input-group date date-check-out" data-date="12-02-2017" data-date-format="mm-dd-yyyy">
                                            <input id="checkOut" name="checkOutDefault" className="form-control" type="text" defaultValue="" />
                                            <span className="input-group-addon btn"><span className="ti-calendar" id="ti-calendar2" /></span>
                                        </div>
                                    </li>
                                    <li>
                                        <h4>Adults</h4>
                                        <div className="wrap-select">
                                            <div id="dd" className="wrapper-dropdown-3">
                                                <span>1</span>
                                                <ul className="dropdown">
                                                    <li><a href="#">2</a></li>
                                                    <li><a href="#">3</a></li>
                                                    <li><a href="#">4</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <h4>Children</h4>
                                        <div className="wrap-select">
                                            <div id="dda" className="wrapper-dropdown-3">
                                                <span>0</span>
                                                <ul className="dropdown">
                                                    <li><a href="#">1</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="vk-btn-check">
                                            <button type="submit" className="btn vk-btn-primary btn-block btn-check">
                                                Check  Availability
                                                        </button>
                                        </div>
                                    </li>
                                </ul>
                                <div className="clearfix" />
                            </form> */}
                            <div className="clearfix" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HeadPanel