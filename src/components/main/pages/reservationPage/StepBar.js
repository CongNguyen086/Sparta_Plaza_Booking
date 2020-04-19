import React from 'react'

const stepContent = ['1. Select Room', '2. Make A Reservation', '3. Confirmation']

const Step = ({ isActive, isFinish, title }) => {
    let className = isActive ? 'active' : ''
    let icon = isFinish ? "fas fa-check" : 'fas fa-angle-right'
    return (
        <li className={className}>
            <a href="">{title}</a>
            <span className="round-tabs five">
                <i className={icon} aria-hidden="true" />
            </span>
        </li>
    )
}

export default function StepBar({ stepNumber }) {
    return (
        <div className="vk-select-room-breakcrumb">
            <ul>
                {stepContent.map((title, index) => {
                    let isActive = false
                    let isFinish = false 
                    if (index < stepNumber - 1) {
                        isActive = true 
                        isFinish = true
                    } else if (index == stepNumber - 1) {
                        isActive = true
                        isFinish = false
                    }
                    return (
                        <Step key={index} title={title} isActive={isActive} isFinish={isFinish} />
                    )
                })}
            </ul>
        </div>
    )
}