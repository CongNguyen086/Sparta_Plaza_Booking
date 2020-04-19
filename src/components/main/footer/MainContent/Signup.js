import React, { Fragment } from 'react'
import tripad from '../_media/stripad.png'

export default function Signup() {
    return (
        <Fragment>
            <div className="form-group">
                <div className="input-group">
                    <input type="email" className="form-control" placeholder="Your Email..." />
                    <span className="input-group-addon success"><i className="fas fa-paper-plane" aria-hidden="true" /></span>
                </div>
            </div>
            <div className="vk-widget-trip">
                <a href="#">
                    <img src={tripad} alt="" />
                </a>
            </div>
        </Fragment>
    )
}