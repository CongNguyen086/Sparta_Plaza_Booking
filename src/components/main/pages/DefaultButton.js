import React from 'react'
import { Button } from 'antd'

export default function DefaultButton({ value, type, handleClick }) {
    return (
        <Button
            className='default-button'
            onClick={handleClick}
            htmlType={type}
        >
            {value}
        </Button>
    )
}