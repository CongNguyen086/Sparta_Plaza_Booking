import React from 'react'
import service_image_1 from '../_media/vk-sparta-image/img1.jpg'
import spa_icon from '../_media/vk-sparta-image-icon/spa2.png'
import service_image_2 from '../_media/vk-sparta-image/img2.jpg'
import event_icon from '../_media/vk-sparta-image-icon/event.png'
import service_image_3 from '../_media/vk-sparta-image/img3.jpg'
import food_icon from '../_media/vk-sparta-image-icon/food.png'
import service_image_4 from '../_media/vk-sparta-image/img4.jpg'
import gym_icon from '../_media/vk-sparta-image-icon/gym.png'

export default function Services() {
    return (
        <div className="vk-sparta-image">
            <div className="container-fluid">
                <div className="vk-sparta-head-title">
                    <h3>Our Services</h3>
                    <h2>Modern &amp; Professional</h2>
                    <div className="vk-sparta-about-border" />
                </div>
                <div className="row">
                    <div className="col-md-3 col-sm-6 vk-clear-padding">
                        <div className="vk-sparta-image-item">
                            <div className="vk-sparta-item-img">
                                <a href="#">
                                    <img src={service_image_1} alt="" className="img-responsive" />
                                </a>
                            </div>
                            <div className="vk-iamge-item-caption">
                                <img src={spa_icon} alt="" />
                                <h2>Spa</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6  vk-clear-padding">
                        <div className="vk-sparta-image-item">
                            <div className="vk-sparta-item-img">
                                <a href="#">
                                    <img src={service_image_2} alt="" className="img-responsive" />
                                </a>
                            </div>
                            <div className="vk-iamge-item-caption">
                                <img src={food_icon} alt="" />
                                <h2>Restaurant</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 vk-clear-padding">
                        <div className="vk-sparta-image-item">
                            <div className="vk-sparta-item-img">
                                <a href="#">
                                    <img src={service_image_3} alt="" className="img-responsive" />
                                </a>
                            </div>
                            <div className="vk-iamge-item-caption">
                                <img src={gym_icon} alt="" />
                                <h2>Gym</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 vk-clear-padding">
                        <div className="vk-sparta-image-item">
                            <div className="vk-sparta-item-img">
                                <a href="#">
                                    <img src={service_image_4} alt="" className="img-responsive" />
                                </a>
                            </div>
                            <div className="vk-iamge-item-caption">
                                <img src={event_icon} alt="" />
                                <h2>Event</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}