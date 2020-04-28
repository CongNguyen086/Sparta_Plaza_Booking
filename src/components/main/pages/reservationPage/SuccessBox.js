import React from 'react'
import { Result } from 'antd'
import DefaultButton from '../DefaultButton'

export default function SuccessBox() {
    return (
        <Result
            status="success"
            title="Payment Successfully!"
            subTitle="We hope to see you soon. Please click on bellow button to view your booking."
            extra={[
                <DefaultButton value='View Booking' />,
                <DefaultButton value='Back to Home' />
            ]}
        />
    )
}
