import React, { Component } from 'react'
import '../custom.css'
// Components
import TopHeaderBar from './TopHeaderBar'
import ShrinkNavBar from './shrinkNavBar/index'

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