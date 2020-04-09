import React from 'react'

export default function WidgetContainer({ className, title, content }) {
    return (
        <aside className="widget">
            <div className={className}>
                <div className="widget-title">
                    {title}
                </div>
                <div className="widget-content">
                    {content}
                </div>
            </div>
            <div className="clearfix" />
        </aside>
    )
}