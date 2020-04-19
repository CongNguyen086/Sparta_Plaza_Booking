import React, { Component } from 'react'
import { List } from 'antd'
import roomList from '../../../../_mocks/roomList'
// Components
import DefaultButton from '../DefaultButton'
import RoomPanel from './RoomPanel'
import RoomItem from '../roomComponent/RoomItem'

const ListTitle = () => {
    return (
        <div className="vk-room-list-header">
            <h2>Luxurious &amp; Convenient</h2>
            <div className="vk-room-list-border" style={{ marginBottom: 60 }} />
        </div>
    )
}

class RoomPage extends Component {
    viewDetails(id) {
        console.log(id)
    }

    renderRoomList = roomList => {
        return (
            <div className="row">
                <List
                    itemLayout='horizontal'
                    dataSource={roomList}
                    renderItem={item => (
                        <RoomItem
                            key={item.roomId}
                            roomItem={item}
                            button={
                                <DefaultButton
                                    value='DETAILS'
                                    handleClick={() => this.viewDetails(item.roomId)}
                                />
                            }
                        />
                    )}
                />
            </div>
        )
    }

    render() {
        return (
            <section className="site-content-area">
                <div className="container-fluid">
                    <div className="row">
                        <RoomPanel />
                        <div className="vk-room-list-content" style={{ paddingTop: 60 }}>
                            <div className="container">
                                <ListTitle />
                                {this.renderRoomList(roomList)}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default RoomPage