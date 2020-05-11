import React from 'react'
import styled from 'styled-components'
import { Checkbox, Button } from 'antd'
import { displayOccupancy, displayNight } from '../../../../utils'
import { defaultFont, primaryFont } from '../../../../constants/font'
import DefaultIcon from '../DefaultIcon'

// const Icon = styled.i`
//     margin-right: 5px;
//     color: white;
// `;
const CheckText = styled.span`
    font-family: ${defaultFont};
    font-style: italic;
    font-weight: normal;
    font-size: 13px;
`;
const SubTotal = styled.label`
    font-family: ${primaryFont};
    font-weight: bold;
    font-size: 16px !important;
    line-height: 1 !important;
`;

export default function BookingRoom({ roomItem: { room_type, adultNumber, rate, promotionValue },
    night, childNumber, handleClick }) {
    let numberOfGuest = displayOccupancy(adultNumber, childNumber)
    let numberOfNight = displayNight(night)
    let subtotal = rate*(1 - promotionValue)
    return (
        <div id="bookingItem">
            <div className="vk-select-room1 vk-select-room-overide" style={{ margin: '10px 30px 0 30px', padding: '10px 0 10px 0' }}>
                <div className="row">
                    <div className="col-md-10">
                        {/* Room Name */}
                        <h2>
                            <span>{room_type}</span>
                        </h2>
                    </div>
                    <div className="col-md-2" style={{ paddingTop: '5px', textAlign: 'right' }}>
                        <a onClick={handleClick}>
                            <i className="far fa-times-circle remove-btn" aria-hidden="true" />
                        </a>
                    </div>
                </div>
                <div className="form-group" style={{ marginBottom: 0 }}>
                    <div className="col-md-7">
                        <DefaultIcon className="fas fa-users" aria-hidden="true" />
                        <label className="control-label" style={{ fontSize: '14px', lineHeight: 2 }}>
                            {numberOfGuest}
                        </label>
                    </div>
                    <div className="col-md-5">
                        <DefaultIcon className="far fa-calendar-alt" aria-hidden="true" />
                        <label className="control-label" style={{ fontSize: '14px', lineHeight: 2 }}> {/* overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' */}
                            {numberOfNight}
                        </label>
                    </div>
                </div>
                <div className="form-group">
                    <div style={{ paddingLeft: 15 }}>
                        {/* Number of room */}
                        <Checkbox>
                            <CheckText>Extra charge for 1 person</CheckText>
                        </Checkbox>
                    </div>
                </div>
                <div className="form-group" style={{ marginBottom: 0 }}>
                    <div className="col-md-7">
                        <SubTotal>
                            Subtotal: ${subtotal}
                        </SubTotal>
                    </div>
                    <div className="col-md-5" style={{ textAlign: "right" }}>
                        <Button type='link' className='booking-detail-btn'>>&nbsp;<u>Details</u></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}