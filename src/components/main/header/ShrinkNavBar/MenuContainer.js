import React from 'react'
// Components
import Menu from './Menu'

const menuData = ['Home', 'Services', 'Rooms', 'My Booking', 'Review', 'About']

export default function MenuContainer() {
    const leftData = menuData.filter((el, index) => index < menuData.length / 2)
    const rightData = menuData.filter((el, index) => index >= menuData.length / 2)
    
    return (
        <nav className="main-navigation">
            <div className="inner-navigation" id="menu">
                <Menu className="nav-bar vk-navrbar-left" data={leftData} />
                <Menu className="nav-bar vk-navbar-right" data={rightData} />
                <div className="clearfix" />
            </div>
        </nav>
    )
}