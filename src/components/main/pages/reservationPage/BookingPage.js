import React, { Component } from 'react'
import { Tag, Collapse } from 'antd'
import { activeTagColor } from '../../../../constants/color'
import roomList from '../../../../_mocks/roomList'
// Components
import DefaultButton from '../DefaultButton'
import StepBar from './StepBar'
import BookingPanel from './BookingPanel'
import MyReservation from './MyReservation'
import CollapseHeader from '../roomComponent/CollapseHeader'
import CollapsePanel from '../roomComponent/CollapsePanel'

// const roomPhoto = [room_1, room_2, room_3, room_4, room_5, room_6]

const ExtraComponent = ({ availableRoom }) => (
    <Tag color={activeTagColor} className='tag-box'>
        <span className='tag-text'>
            {availableRoom} {availableRoom > 1 ? 'rooms' : 'room'} available
        </span>
    </Tag>
)

class BookingPage extends Component {
    addRoomToBooking(id, e) {
        console.log(id)
    }

    renderList = roomList => {
        return roomList.map(roomItem => {
            let id = roomItem.roomId
            console.log(roomItem.type)
            return (
                <Collapse.Panel
                    showArrow={false}
                    header={<CollapseHeader
                        roomItem={roomItem}
                        isGridInfo={true}
                        extraTitle={<ExtraComponent availableRoom={2} />}
                        button={<DefaultButton value='SELECT' />}
                    />}
                    key={id}
                    className='collapse-header'
                >
                    <CollapsePanel roomItem={roomItem} handleClick={(e) => this.addRoomToBooking(id, e)} />
                </Collapse.Panel>
            )
        })
    }

    render() {
        return (
            <section className="site-content-area">
                <BookingPanel />
                <div className="vk-room-list-content" style={{ paddingTop: 60 }}>
                    <div className="container">
                        <StepBar stepNumber={1} />
                        <div className="row">
                            <div className="vk-select-room-info">
                                <div className="col-md-8">
                                    <Collapse accordion style={{ border: 0 }}>
                                        {this.renderList(roomList)}
                                    </Collapse>
                                </div>
                                {/* Booking List */}
                                <form className="form-horizontal">
                                    <div className="col-md-4">
                                        <MyReservation />
                                        {/* <div className="vk-room-details-content-right" style={{ background: '#b0914f', paddingBottom: 'unset' }}>
                                            <h3 style={{ borderBottom: 'unset' }}>Your Reservation</h3>
                                            
                                            <div id="bookingItem" hidden>
                                                <div className="vk-select-room1 vk-select-room-overide" style={{ margin: '10px 30px 0 30px', padding: '10px 0 10px 0' }}>
                                                    <div className="row">
                                                        <div className="col-md-10">
                                                            
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
                                                            
                                                            <label className="number#" style={{ fontSize: '14px', fontStyle: 'italic' }}>
                                                                &nbsp;rooms
            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{ backgroundColor: '#8c7033', paddingBottom: '20px' }}>
                                                
                                                <div className="form-group date-input">
                                                    <div className="col-md-12">
                                                        <label className="control-label">CHECK - IN</label>
                                                        <div className="input-group date date-check-in" data-date="12-02-2017" data-date-format="mm-dd-yyyy">
                                                            <input name="checkIn" className="form-control" type="text" defaultValue="15/10/2019" />
                                                            <span className="input-group-addon btn"><span className="ti-calendar" id="ti-calendar1" /></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group date-input">
                                                    <div className="col-md-12">
                                                        <label className="control-label date-check-out">CHECK - OUT</label>
                                                        <div className="input-group date date-check-out" data-date="12-02-2017" data-date-format="mm-dd-yyyy">
                                                            <input name="checkOut" className="form-control" type="text" defaultValue="16/10/2019" />
                                                            <span className="input-group-addon btn"><span className="ti-calendar" id="ti-calendar2" /></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group date-input">
                                                  
                                                    <div className="col-md-6">
                                                        <label className="control-label">ADULTS</label>
                                                        <select id="adult" name="numberOfAdult" className="form-control">
                                                            <option>1</option>
                                                            <option>2</option>
                                                            <option>3</option>
                                                            <option>4</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label className="control-label">CHILDREN</label>
                                                        <select id="child" name="numberOfChild" className="form-control">
                                                            <option>1</option>
                                                            <option>2</option>
                                                        </select>
                                                    </div>
                                                </div>
                                               
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
                                        </div> */}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default BookingPage