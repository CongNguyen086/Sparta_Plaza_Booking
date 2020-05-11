import React from 'react'
import { Button } from 'antd'

export default function DefaultButton({ value, icon: Icon, handleClick, type }) {
    return (
        <Button
            className='default-button'
            icon={<Icon style={{ fontSize: 15 }} />}
            onClick={handleClick}
            htmlType={type}
        >
            {value}
        </Button>
    )
}