import React, { Component } from 'react'
// Components
import MainContent from './mainContent/index'
import Copyright from './Copyright'

class Footer extends Component {
    render() {
        return (
            <footer className="site-footer footer-default">
                <div className="footer-main-content">
                    <MainContent />
                </div>
                <div className="copyright-area">
                    <Copyright />
                </div>
            </footer>
        )
    }
}

export default Footer