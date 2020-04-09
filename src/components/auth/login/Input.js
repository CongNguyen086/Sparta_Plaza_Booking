import React, { Component } from 'react'

class Input extends Component {
    render() {
        const { classNamePar, style, classNameChild, type, id, name, placeholder, children } = this.props
        return (
            <div className={classNamePar} style={style}>
                <input type={type} className={classNameChild} id={id}
                    name={name} placeholder={placeholder} />
                {children}
            </div>
        )
    }
}

export default Input