import React from 'react'
import { Card } from 'antd'

export default function BookingInputCard({ title, children }) {
    const fontFamily = '"Playfair Display", serif'
    return (
        <Card title={title}
            size="small"
            bordered={false}
            headStyle={{
                fontFamily: fontFamily,
                fontWeight: "bold",
                color: '#7b7b7b',
                paddingLeft: 25,
                borderBottomColor: '#e0e0e0'
            }}
            bodyStyle={{ height: 75 }}
        >
            {children}
        </Card>
    )
}