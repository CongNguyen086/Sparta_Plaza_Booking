import React, { Component } from 'react'
import { Tag, Collapse } from 'antd'
import { activeTagColor } from '../../../../../constants/color'
import roomList from '../../../../../_mocks/roomList'
// Components
import DefaultButton from '../../DefaultButton'
import MyReservation from './MyReservation'
import CollapseHeader from '../../roomComponent/CollapseHeader'
import CollapseBody from '../../roomComponent/CollapseBody'

const ExtraComponent = ({ availableRoom }) => (
    <Tag color={activeTagColor} className='tag-box'>
        <span className='tag-text'>
            {availableRoom} {availableRoom > 1 ? 'rooms' : 'room'} available
        </span>
    </Tag>
)

export default class SelectRoomProcess extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedList: []
        }
    }

    addRoomToBooking = (id) => {
        const { selectedList } = this.state
        let newList = selectedList
        let roomItem = roomList.find(item => item.roomId == id)
        roomItem.night = 2
        newList.push(roomItem)
        this.setState({ selectedList: newList })
    }

    renderAvailableList = roomList => {
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
                    <CollapseBody roomItem={roomItem} handleClick={() => this.addRoomToBooking(id)} />
                </Collapse.Panel>
            )
        })
    }

    render() {
        const { selectedList } = this.state
        return (
            <div className="row">
                <div className="vk-select-room-info">
                    <div className="col-md-8">
                        <Collapse accordion style={{ border: 0 }}>
                            {this.renderAvailableList(roomList)}
                        </Collapse>
                    </div>
                    {/* Booking List */}
                    <div className="form-horizontal">
                        <div className="col-md-4">
                            <MyReservation selectedList={selectedList} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
