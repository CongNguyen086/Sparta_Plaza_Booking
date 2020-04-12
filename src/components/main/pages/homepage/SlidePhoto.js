import React from 'react'

export default function SlidePhoto({ src }) {
    return (
        <div className="item">
            <div className="vk-item-slide">
                <img src={src} alt="" className="img-responsive" />
                <div className="vk-slide-caption">
                    <div className="container">
                        <h3 className="animated fadeInDown slide-delay-1">Swimming Pool</h3>
                        <h2 className="animated fadeInUp slide-delay-2">Sparta Plaza Hotel</h2>
                        <div className="clearfix" />
                    </div>
                </div>
            </div>
        </div>
    )
}