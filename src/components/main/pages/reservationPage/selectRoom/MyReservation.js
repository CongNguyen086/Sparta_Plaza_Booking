import React, { Component } from 'react'
// Components
import BookingRoom from '../BookingRoom'
import BookingInput from './BookingInput'

const BookingRoomList = ({ selectedList }) => {
    return selectedList.map(item => (
        <BookingRoom roomItem={item} night={item.night} childNumber={item.childNumber} />
    ))
}

class MyReservation extends Component {
    render() {
        const { selectedList } = this.props
        return (
            <div className="vk-room-details-content-right" style={{ background: '#b0914f', paddingBottom: 'unset' }}>
                <h3 style={{ borderBottom: 'unset' }}>Your Reservation</h3>
                {/* Selected booking item */}
                <BookingRoomList selectedList={selectedList} />
                {/* Choose date & number */}
                <BookingInput />
            </div>
        )
    }
}

export default MyReservation