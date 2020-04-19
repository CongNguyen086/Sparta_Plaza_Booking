import React from 'react'
import moment from 'moment'
import { DatePicker, Select } from 'antd'
import { disabledDateBeforeToday } from '../../../../../utils'

const dateFormat = 'DD-MM-YYYY'
const { Option } = Select

const adultNumber = Array(10).fill(1).map((val, idx) => {
    let value = val + idx
    return <Option key={value}>{value}</Option >
})
const childNumber = [...Array(10).keys()].map((val, idx) => {
    let value = val + idx
    return <Option key={value}>{value}</Option >
})

export default function BookingInput({ handleDate, handleAdult, handleChild }) {
    return (
        <div style={{ backgroundColor: '#8c7033', paddingBottom: '20px', marginTop: 10 }}>
            {/* Date input */}
            <div className="form-group date-input">
                <div className="col-md-12">
                    <label className="control-label">CHECK - IN</label>
                    <DatePicker
                        name='checkin'
                        placeholder='Check-in'
                        format={dateFormat}
                        defaultValue={moment()}
                        disabledDate={disabledDateBeforeToday}
                        style={{ width: '100%' }}
                        onChange={handleDate}
                    />
                    {/* <div className="input-group date date-check-in" data-date="12-02-2017" data-date-format="mm-dd-yyyy">
                                        <input name="checkIn" className="form-control" type="text" defaultValue="15/10/2019" />
                                        <span className="input-group-addon btn"><span className="ti-calendar" id="ti-calendar1" /></span>
                                    </div> */}
                </div>
            </div>
            <div className="form-group date-input">
                <div className="col-md-12">
                    <label className="control-label date-check-out">CHECK - OUT</label>
                    <DatePicker
                        name='checkout'
                        placeholder='Check-out'
                        format={dateFormat}
                        defaultValue={moment().add(1, 'days')}
                        disabledDate={disabledDateBeforeToday}
                        style={{ width: '100%' }}
                        onChange={handleDate}
                    />
                </div>
            </div>
            <div className="form-group date-input">
                {/* Date input */}
                <div className="col-md-6">
                    <label className="control-label">ADULTS</label>
                    <Select defaultValue={1} className='guest-selector' onChange={handleAdult}>
                        {adultNumber}
                    </Select>
                </div>
                <div className="col-md-6">
                    <label className="control-label">CHILDREN</label>
                    <Select defaultValue={1} className='guest-selector' onChange={handleChild}>
                        {childNumber}
                    </Select>
                    {/* <select id="child" name="numberOfChild" className="form-control">
                        <option>1</option>
                        <option>2</option>
                    </select> */}
                </div>
            </div>
            {/* Button */}
            <div className="booking-wrapper">
                <a href="#" className=" vk-btn vk-btn-transparent
                                      vk-border-brown vk-btn-l vk-btn-default
                                      text-uppercase booking-btn">
                    <span className="title">Make booking</span>
                </a>
                <a href="#" className=" vk-btn vk-btn-transparent
                                      vk-border-brown vk-btn-l vk-btn-default
                                      text-uppercase booking-btn" hidden="hidden">
                    <span className="title">Update date</span>
                </a>
            </div>
        </div>
    )
}
