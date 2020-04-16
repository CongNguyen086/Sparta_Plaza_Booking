import React from 'react'

export default function BookingList() {
    return (
            <div id="bookingItem">
                <div className="vk-select-room1 vk-select-room-overide" style={{ margin: '10px 30px 0 30px', padding: '10px 0 10px 0' }}>
                    <div className="row">
                        <div className="col-md-10">
                            {/* Room Name */}
                            <h2><span className="name#" /></h2>
                        </div>
                        <div className="col-md-2" style={{ paddingTop: '5px', textAlign: 'right' }}>
                            <a href="#">
                                <i className="fa fa-times-circle-o remove-btn" aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                    <div className="form-group" style={{ marginBottom: 0 }}>
                        <div className="col-md-5">
                            <label className="control-label" style={{ fontSize: '14px' }}>
                                2 adults/room
                            </label>
                        </div>
                        <div className="col-md-7">
                            <label className="control-label" style={{ fontSize: '14px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                Sea view, 1 double beds, Free wifi
                    </label>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-md-4">
                            {/* Number of room */}
                            <label className="number#" style={{ fontSize: '14px', fontStyle: 'italic' }}>
                                &nbsp;rooms
                    </label>
                        </div>
                    </div>
                </div>
            </div>
    )
}