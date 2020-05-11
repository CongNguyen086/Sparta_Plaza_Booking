import React from 'react'
import { Card } from 'antd'
// Components
import DefaultButton from '../DefaultButton'
import CollapsePanelContent from './CollapsePanelContent'
import CollapseExtraBenefit from './CollapseExtraBenefit'

export default function CollapsePanel({ roomItem, ...other }) {
    return (
        <Card
            title={<a className='collapse-title'>{roomItem.room_type}</a>}
            extra={<DefaultButton value='ADD ROOM' {...other} />}
            bordered={false}
            headStyle={{ padding: 0 }}
            bodyStyle={{ fontFamily: 'Poppins-Regular', margin: '0 5px', padding: 0 }}
        >
            <CollapsePanelContent roomItem={roomItem} />
            <CollapseExtraBenefit roomItem={roomItem} />
        </Card>
    )
}