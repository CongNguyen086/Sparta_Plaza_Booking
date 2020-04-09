import React from 'react'
import { Link, useHistory } from 'react-router-dom'
// Component
import LoginStatus from './LoginStatus'
import auth from '../../auth/auth'

const Info = () => (
    <div className="quick-address vk-navbar-left">
        <p>45 Queen's Park Rd, Bright, BN2 OGJ, UK</p>
        <p>Reservation: (+233) 123 456789</p>
    </div>
)

const TopHeaderBar = () => {
    const history = useHistory()
    return (
        <div className="vk-header-top hidden-xs hidden-sm">
            <div className="container">
                <div className="content">
                    <Info />
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