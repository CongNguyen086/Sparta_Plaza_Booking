import React, { Component } from 'react'
import { List } from 'antd'
import RoomInfo from './RoomInfo'

const { Item } = List

const RoomImage = ({ src }) => {
    return (
        <div className="vk-dark-our-room-item-left" style={{ paddingLeft: 12 }}>
            <div className="vk-dark-our-room-item-img">
                <img src={src} className="img-responsive" />
            </div>
        </div>
    )
}

class RoomItem extends Component {
    render() {
        const { roomItem, ...other } = this.props
        return (
            <Item className="roomitem item">
                <Item.Meta
                    avatar={<RoomImage src={roomItem.largeImage} />}
                    title={<RoomInfo roomItem={roomItem} {...other} />}
                />
            </Item>
        )
    }
}

export default RoomItem