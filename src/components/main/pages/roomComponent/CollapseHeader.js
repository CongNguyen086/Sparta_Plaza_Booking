import React, { Component } from 'react'
import { Card } from 'antd'
import RoomInfo from './RoomInfo'

const RoomImage = ({ src }) => {
    return (
        <div className="vk-dark-our-room-item-left">
            <div className="vk-dark-our-room-item-img">
                <img src={src} className="img-responsive" />
            </div>
        </div>
    )
}

class CollapseHeader extends Component {
    render() {
        const { roomItem, ...other } = this.props
        return (
            <Card bordered={false} hoverable>
                <Card.Grid
                    className='collapse-header-grid'
                    style={{ width: '40%' }}
                    hoverable={false}
                >
                    <RoomImage src={roomItem.imageUrl} />
                </Card.Grid>
                <Card.Grid
                    className='collapse-header-grid'
                    style={{ width: '60%' }}
                    hoverable={false}
                >
                    <RoomInfo roomItem={roomItem} {...other} />
                </Card.Grid>
            </Card>
        )
    }
}

export default CollapseHeader