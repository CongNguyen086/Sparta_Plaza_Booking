import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import logo from './_media/LOGO.png'
// Component
import LoginStatus from './LoginStatus'
import auth from '../../auth/auth'

const Info = () => (
    <div className="quick-address vk-navbar-left">
        <p>45 Queen's Park Rd, Bright, BN2 OGJ, UK</p>
        <p>Reservation: (+233) 123 456789</p>
    </div>
)

const Logo = () => (
    <div className="vk-navbar-header navbar-header" style={{ marginTop: 5 }}>
        <a className="vk-navbar-brand navbar-brand" href="#">
            <img src={logo} alt="" className="img-responsive" />
        </a>
    </div>
)

const TopHeaderBar = () => {
    const history = useHistory()
    return (
        <div className="vk-header-top hidden-xs hidden-sm" style={{ position: "unset" }}>
            <div className="container">
                <div className="content">
                    <Info />
                    <Logo />
                    <div className="vk-top-header-right">
                        <ul className="quick-address">
                            <li>
                                <LoginStatus isAuthenticated={auth.isAuthenticated} user='James' />
                            </li>
                            <li>
                                {
                                    auth.isAuthenticated
                                        ? <a onClick={() => {
                                            auth.signout(() => {
                                                history.push('/')
                                            })
                                        }}>Logout</a>
                                        : <Link to='/'>Register</Link>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopHeaderBar