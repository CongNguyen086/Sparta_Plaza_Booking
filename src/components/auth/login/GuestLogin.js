import React, { Component } from 'react'
import bgLogin from '../../../assets/login_layout/media/images/bg_login.jpg'
// StyleSheet
import '../../../assets/login_layout/fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import '../../../assets/login_layout/fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import '../../../assets/login_layout/fonts/iconic/css/material-design-iconic-font.min.css'
import '../../../assets/login_layout/css/main.css'
import '../../../assets/login_layout/css/util.css'
// Component
import Form from './Form'
import auth from '../auth'

class Login extends Component {
    handleSubmit = (e) => {
        auth.authenticate(() => { this.props.history.push('/') })
        e.preventDefault()
    }

    render() {
        const { match } = this.props
        console.log(match)
        return (
            <div className="limiter">
                <div className="container-login100" style={{ backgroundImage: `url(${bgLogin})` }}>
                    <div className="wrap-login100">
                        <Form onSubmit={this.handleSubmit} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Login
