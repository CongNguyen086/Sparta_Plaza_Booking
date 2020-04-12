import React, { Component } from 'react'
// Components
import HeadPanel from './HeadPanel'
import Welcome from './Welcome'
import Services from './Services'
import Review from './Review'
import Blog from './Blog'
import Gallery from './Gallery'

class Home extends Component {
    render() {
        return (
            <div id="main-content" className="site-main-content">
                <div id="home-main-content" className="site-home-main-content">
                    <div className="container-fluid">
                        <div className="row">
                            {/* HeadPanel */}
                            <HeadPanel />
                            {/* Introduction */}
                            <Welcome />
                            {/* Services */}
                            <Services />
                            <div className="clearfix" />
                            {/* Review */}
                            <Review />
                            {/* Blog */}
                            <Blog />
                            {/* Gallery */}
                            <Gallery />
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Home