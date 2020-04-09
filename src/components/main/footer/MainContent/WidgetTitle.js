import React from 'react'

export default function WidgetTitle({ isImage, text, src }) {
    return (
        isImage
            ? (<a href="#">
                <img src={src} alt="" className="img-responsive" />
            </a>)
            : <h3 className="widget-title">{text}</h3>
    )
}

WidgetTitle.defaultProps = { isImage: false }