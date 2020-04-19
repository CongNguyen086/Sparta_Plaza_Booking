import React, { Component } from 'react'
import { DatePicker, Col, Row, Select, Button } from 'antd'
import moment from 'moment'
import { disabledDateBeforeToday } from '../../../../utils'
// Components
import BookingInputCard from './BookingInputCard'
import CustomSelect from './CustomSelect'

const { RangePicker } = DatePicker
const { Option } = Select
const dateFormat = 'DD-MM-YYYY'

const adultNumber = Array(10).fill(1).map((val, idx) => {
    let value = val + idx
    return <Option key={value}>{value}</Option >
})
const childNumber = [...Array(10).keys()].map((val, idx) => {
    let value = val + idx
    return <Option key={value}>{value}</Option >
})

class CheckBookingPanel extends Component {
    render() {
        return (
            <form className='form-horizontal  booking-hotel-all'>
                <Row gutter={16}>
                    <Col span={9}>
                        <BookingInputCard title='CHOOSE DATE'>
                            <div className="input-group date date-check-in">
                                <RangePicker
                                    bordered={false}
                                    placeholder={['Check-in', 'Check-out']}
                                    format={dateFormat}
                                    defaultValue={[moment(), moment().add(1, 'days')]}
                                    disabledDate={disabledDateBeforeToday}
                                    style={{ fontSize: '20px' }}
                                />
                            </div>
                        </BookingInputCard>
                    </Col>
                    <Col span={5}>
                        <BookingInputCard title='ADULTS'>
                            <CustomSelect>
                                {adultNumber}
                            </CustomSelect>
                        </BookingInputCard>
                    </Col>
                    <Col span={5}>
                        <BookingInputCard title='CHILDREN'>
                            <CustomSelect>
                                {childNumber}
                            </CustomSelect>
                        </BookingInputCard>
                    </Col>
                    <Col span={5}>
                        <Button className='btn-check'>Check Availability</Button>
                        {/* <div className="vk-btn-check">
                            <button type="submit" className="btn vk-btn-primary btn-block btn-check">
                                Check  Availability
                            </button>
                        </div> */}
                    </Col>
                </Row>
            </form>
        )
    }
}

export default CheckBookingPanel