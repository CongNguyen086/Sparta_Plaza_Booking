import React, { Component } from 'react'
// StyleSheet
import "../../assets/main_layout/css/bootstrap.min.css"
import "../../assets/main_layout/css/bootstrap-theme.min.css"
import "../../assets/main_layout/css/style.css"
import "../../assets/main_layout/fonts/raleway/raleway.css"
import "../../assets/main_layout/fonts/font-awesome/css/font-awesome.css"
import "../../assets/main_layout/fonts/playfair-display/playfair-display.css"
import "../../assets/main_layout/plugin/dist/assets/owl.carousel.min.css"
import "../../assets/main_layout/plugin/dist/assets/owl.theme.default.min.css"
import "../../assets/main_layout/css/themify-icons.css"
import "../../assets/main_layout/css/animate.css"
import "../../assets/main_layout/css/bootstrap-datepicker3.css"
import "../../assets/main_layout/css/main.css"
import "../../assets/main_layout/css/jquery-ui.min.css"
import "../../assets/main_layout/css/nice-select.css"
import "../../assets/main_layout/css/lightgallery.css"
import "../../assets/main_layout/css/bootstrap-datetimepicker.min.css"
import "../../assets/main_layout/css/semantic.css"
// Components
import Header from './header/index'
import MainNavigator from './pages/index'
import Footer from './footer/index'

class MainPages extends Component {
    render() {
        return (
            <div className="vk-sparta-center-logo">
                <div id="wrapper-container" className="site-wrapper-container">
                    <Header />
                    <MainNavigator />
                    <Footer />
                </div>
            </div>
        )
    }
}

export default MainPages