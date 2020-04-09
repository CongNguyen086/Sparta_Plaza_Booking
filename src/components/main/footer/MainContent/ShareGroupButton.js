import React from 'react'
import buttonList from '../_mocks/buttonMock'

export const ShareButton = ({ url, className }) => (
    <a href={url} target="_blank">
        <i className={className} aria-hidden="true" />
    </a>
)

export default function ShareGroupButton() {
    return (
        <div className="vk-widget-content-share">
            <p>
                {
                    buttonList.map(el => <ShareButton key={el.className} {...el} />)
                }
            </p>
        </div>
    )
}