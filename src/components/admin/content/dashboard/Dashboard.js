import React, { Component } from 'react'
// Components
import ContentHeader from '../ContentHeader'
import MonthlyRevenueChart from './MonthlyRevenueChart'
import RevenuePAR from './RevenuePAR'

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <ContentHeader {...this.props} />
                <MonthlyRevenueChart />
                <RevenuePAR />
            </div>
        )
    }
}
