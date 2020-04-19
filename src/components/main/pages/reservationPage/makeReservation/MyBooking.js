import React from 'react'
import { Row, Col, Collapse } from 'antd'
import styled from 'styled-components'
// Components
import DefaultIcon from '../../DefaultIcon'
import CollapseBookingRoom from './CollapseBookingRoom'

const styleGeneralInfoWrapper = {
    margin: '10px 20px 0 20px',
    padding: '10px 0 10px 0',
    borderBottom: '1px solid #f0f0f0'
}
const BookingTitle = styled.h3`
    border-bottom: unset !important;
`;
const OverallText = styled.span`
    color: white;
    font-size: 15px;
`;
const GeneralBookingInfo = () => {
    return (
        <div id="bookingItem">
            <div className="vk-select-room1 vk-select-room-overide"
                style={styleGeneralInfoWrapper}>
                <Row align='middle'
                    gutter={[{ xs: 8, sm: 16, md: 20 }, { xs: 8, sm: 10, md: 10 }]}
                >
                    <Col span={12}>
                        <OverallText><b>Check-in:&nbsp;</b>20/4/2020</OverallText>
                    </Col>
                    <Col span={12}>
                        <OverallText><b>Check-out:&nbsp;</b>21/4/2020</OverallText>
                    </Col>
                </Row>
                <Row align='middle'
                    gutter={[{ xs: 8, sm: 16, md: 20 }, { xs: 8, sm: 10, md: 10 }]}
                >
                    <Col span={13}>
                        <DefaultIcon className="fas fa-users" aria-hidden="true" />
                        <OverallText><b>2 Adults,1 Children</b></OverallText>
                    </Col>
                    <Col span={11}>
                        <DefaultIcon className="far fa-calendar-alt" aria-hidden="true" />
                        <OverallText><b>2 Nights</b></OverallText>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default function MyBooking() {
    return (
        <div className="vk-room-details-content-right">
            <BookingTitle>Your Reservation</BookingTitle>
            <GeneralBookingInfo />
            <CollapseBookingRoom />
        </div>
    )
}

{/* <div className="vk-make-a-room">
    <div className="vk-make-a-room1">
        <h3>Room 1 : Double Room <span>($100/night)</span></h3>
        <ul>
            <li>Adult: 2</li>
            <li>Children: 1</li>
            <li>night(s): 2</li>
        </ul>
        <h4>$300.0</h4>
    </div>
    <div className="vk-make-a-room2">
        <h3>Room 2 : Double Twin Room <span>($150/night)</span></h3>
        <ul>
            <li>Adult: 2</li>
            <li>Children: 1</li>
            <li>night(s): 2</li>
        </ul>
        <h4>$450.0</h4>
    </div>
</div>
    <div className="vk-make-a-total">
        <table className="shop_table shop_table_responsive">
            <tbody>
                <tr className="order-total">
                    <th>Total</th>
                    <td data-title="Tổng cộng">$800.00 </td>
                </tr>
                <tr className="tax-total">
                    <th>Tax 10%</th>
                    <td data-title="Thuế">$80.00</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div className="vk-make-a-grand-total">
        <table className="shop_table shop_table_responsive">
            <tbody>
                <tr className="order-total">
                    <th>Grand Total</th>
                    <td data-title="Grand-total">$880.00 </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div className="vk-make-a-btn">
        <h4><a href="#">Edit Booking</a></h4>
    </div> */}
