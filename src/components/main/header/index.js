import React, { Component } from 'react'
// Components
import TopHeaderBar from './TopHeaderBar'
import ShrinkNavBar from './ShrinkNavBar/index'

class Header extends Component {
    render() {
        return (
            <header className="site-header header-default header-sticky">
                <TopHeaderBar />
                <ShrinkNavBar />
            </header>
        )
    }
}

export default Header