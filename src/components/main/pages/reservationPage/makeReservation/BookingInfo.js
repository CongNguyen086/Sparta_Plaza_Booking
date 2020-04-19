import React from 'react'
import DefaultIcon from '../../DefaultIcon'

const styleWrapper = {
    margin: 0,
    padding: '10px 0 10px 0',
    border: 0
}

export default function BookingInfo() {
    return (
        <div id="bookingItem">
            <div className="vk-select-room1 vk-select-room-overide"
                style={styleWrapper}>
                <div className="row">
                    <div className="col-md-12">
                        {/* Room Name */}
                        <h2 style={{ fontSize: 18 }}>
                            <span>Room 1: Superior Single Room</span>
                        </h2>
                    </div>
                </div>
                {/* <div className="form-group" style={{ marginBottom: 0 }}>
                    <div className="col-md-7">
                        <DefaultIcon className="fas fa-users" aria-hidden="true" />
                        <label className="control-label" style={{ fontSize: '14px', lineHeight: 2 }}>
                            numberOfGuest
                        </label>
                    </div>
                    <div className="col-md-5">
                        <DefaultIcon className="far fa-calendar-alt" aria-hidden="true" />
                        <label className="control-label" style={{ fontSize: '14px', lineHeight: 2 }}>
                            numberOfNight
                        </label>
                    </div>
                </div> */}
                {/* <div className="form-group" style={{ marginBottom: 0 }}>
                    <div className="col-md-7">
                        <SubTotal>
                            Subtotal: ${subtotal}
                        </SubTotal>
                    </div>
                    <div className="col-md-5" style={{ textAlign: "right" }}>
                        <Button type='link' className='booking-detail-btn'>>&nbsp;<u>Details</u></Button>
                    </div>
                </div> */}
            </div>
        </div>
    )
}
