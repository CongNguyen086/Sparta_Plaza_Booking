import React, { Component } from 'react'
import logo from './LOGO.png'
// Components
import MenuContainer from './MenuContainer'

const Logo = () => (
    <a className="vk-navbar-brand navbar-brand" href="#">
        <img src={logo} alt="" className="img-responsive" />
    </a>
)

class ShrinkNavBar extends Component {
    render() {
        return (
            <nav className="main-navigation">
                <div className="vk-main-menu animated uni-sticky">
                    <div className="container">
                        <div className="uni-transparent-1-menu">
                            <div className="vk-navbar-header navbar-header">
                                <Logo />
                            </div>
                            {/*./vk-navbar-collapse*/}
                            <div className="row">
                                <MenuContainer />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default ShrinkNavBar