import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = ({ userName }) => (
    <React.Fragment>
        <input type="hidden" name="selection" />
        <i className="fas fa-angle-down" aria-hidden="true" />
        <div className="default text" style={{ marginRight: '5px' }}>
            Welcome, {userName}
        </div>
    </React.Fragment>
)

export default function LoginStatus({ isAuthenticated, user }) {
    return (
        <div className="ui grid">
            <div className="column">
                <div className="ui selection dropdown">
                    {
                        isAuthenticated
                            ? <Welcome userName={user} />
                            : <div className="default text" style={{marginRight: 5}}>
                                <Link to='/login'
                                    className='login-link'
                                >Login</Link>
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}