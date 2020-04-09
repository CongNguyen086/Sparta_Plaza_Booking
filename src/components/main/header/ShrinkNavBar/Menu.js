import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu({ className, data }) {
    return (
        <ul className={className}>
            {data.map(item => (
                <li key={item}>
                    <Link to='/mybooking'>{item}</Link>
                </li>
            ))}
        </ul>
    )
}