import React, { Component } from 'react'
// Component
import Input from './Input'
import Button from './Button'

const Header = () => (
    <React.Fragment>
        <span className="login100-form-logo">
            <i className="zmdi zmdi-landscape" />
        </span>

        <span className="login100-form-title p-b-34 p-t-27">
            Sparta Plaza
        </span>
    </React.Fragment>
)

class Form extends Component {
    render() {
        const { onSubmit } = this.props
        return (
            <form className="login100-form validate-form" >
                <Header />

                <Input
                    type="text"
                    classNamePar="wrap-input100 validate-input"
                    classNameChild="input100"
                    name="username"
                    placeholder="User ID"
                >
                    <span className="focus-input100" data-placeholder="&#xf207;" />
                </Input>

                <Input
                    type="password"
                    classNamePar="wrap-input100 validate-input"
                    classNameChild="input100"
                    name="pass"
                    placeholder="Password"
                >
                    <span className="focus-input100" data-placeholder="&#xf191;" />
                </Input>

                <Input
                    id="ckb1"
                    type="checkbox"
                    classNamePar="contact100-form-checkbox"
                    classNameChild="input-checkbox100"
                    name="remember-me"
                    style={{ paddingBottom: 20 }}
                >
                    <label className="label-checkbox100" htmlFor="ckb1">
                        Remember me
                    </label>
                </Input>
               
                <Button onSubmit={onSubmit} />
            </form>
        )
    }
}

export default Form