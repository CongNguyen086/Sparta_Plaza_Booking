import React from 'react'
import { Button } from 'antd'

export default function DefaultButton({ value, handleClick }) {
    return (
        <Button className='default-button' onClick={handleClick}>
            {value}
        </Button>
    )
}