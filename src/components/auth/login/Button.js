import React, { Component } from 'react'

class Button extends Component {
    render() {
        const { onSubmit } = this.props
        return (
            <div className="container-login100-form-btn">
                <button className="login100-form-btn" onClick={onSubmit}>
                    Login
                </button>
            </div>
        )
    }
}

export default Button