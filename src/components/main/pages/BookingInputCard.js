import React from 'react'
import { Card } from 'antd'

export default function BookingInputCard({ title, children }) {
    const fontFamily = '"Playfair Display", serif'
    const borderBottom = '1px solid #e0e0e0;'
    return (
        <Card title={title}
            size="small"
            bordered={false}
            headStyle={{
                // fontFamily: "Cinzel Decorative",
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