import React, { Component } from 'react'
// Components
import ContentHeader from '../ContentHeader'

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <ContentHeader {...this.props} />
            </div>
        )
    }
}
