import React from 'react'
import { Collapse } from 'antd'
// Components
import BookingInfo from './BookingInfo';
import BookingDetails from './BookingDetails';

export default function CollapseBookingRoom() {
    return (
        <Collapse bordered={false}>
            <Collapse.Panel
                header={<BookingInfo />}
                className='review-booking-collapse-panel'
            >
                <BookingDetails />
            </Collapse.Panel>
            <Collapse.Panel
                header={<BookingInfo />}
                className='review-booking-collapse-panel'
            >
                <BookingDetails />
            </Collapse.Panel>
        </Collapse>
    )
}
