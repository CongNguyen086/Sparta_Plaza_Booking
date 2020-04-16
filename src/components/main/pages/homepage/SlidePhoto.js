import React from 'react'

export default function SlidePhoto({ src }) {
    return (
        <div className="item">
            <div className="vk-item-slide" style={{ alignItems: 'flex-start' }}>
                <img src={src} alt="" className="img-responsive" />
                <div className="vk-slide-caption" style={{ top: '25%' }}>
                    <div className="container">
                        <h2 className="animated fadeInUp slide-delay-2">Sparta Plaza</h2>
                        <h3 className="animated fadeInDown slide-delay-1">Luxurious &amp; Modern Hotel</h3>
                        <div className="clearfix" />
                    </div>
                </div>
            </div>
        </div>
    )
}