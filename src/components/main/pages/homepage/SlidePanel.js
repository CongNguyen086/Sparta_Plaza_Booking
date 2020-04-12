import React from 'react'
import { Carousel } from 'antd'
import photo_1 from '../_media/banner21.jpg'
import photo_2 from '../_media/banner20.jpg'
import photo_3 from '../_media/banner23.jpg'
// Components
import SlidePhoto from './SlidePhoto'

const data = [photo_1, photo_2, photo_3]

export default function SlidePanel() {
    return (
        <Carousel autoplay autoplaySpeed={5000} speed={1500} dots={false}>
            {data.map(item => (
                <SlidePhoto src={item} />
            ))}
        </Carousel>
    )
}