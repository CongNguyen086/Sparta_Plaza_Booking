import React, { Component } from 'react'
import { Affix } from 'antd'
// Components
import MenuContainer from './MenuContainer'

class ShrinkNavBar extends Component {
    render() {
        return (
            <nav className="main-navigation">
                <div className="vk-main-menu animated uni-sticky">
                    <div className="container">
                        <div className="uni-transparent-1-menu">
                            {/*./vk-navbar-collapse*/}
                            <div className="row">
                                <Affix>
                                    <MenuContainer />
                                </Affix>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default ShrinkNavBar