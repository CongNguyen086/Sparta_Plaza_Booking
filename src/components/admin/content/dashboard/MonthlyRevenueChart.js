import React, { Component } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine,
} from 'recharts';

const data = [
    {
        name: 'Jan', Revenue: 30000,
    },
    {
        name: 'Feb', Revenue: 24000,
    },
    {
        name: 'Mar', Revenue: 20000,
    },
    {
        name: 'Apr', Revenue: 10000,
    },
    {
        name: 'May', Revenue: 25000,
    },
    {
        name: 'Jun', Revenue: 15000,
    },
];

const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
        return (
            <div className="custom-tooltip">
                <p style={{ color: 'black' }}>{`${label}`}</p>
                <p style={{ color: 'black' }}>${`${payload[0].value.toLocaleString()}`}</p>
            </div>
        );
    }

    return null;
};

export default class Example extends Component {
    render() {
        return (
            <div className='chart-container'>
                <LineChart width={1000} height={400} data={data} unit='Month'>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
                    <YAxis />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Line type="monotone" dataKey="Revenue" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
                <div className='chart-title'>
                    Monthly Revenue in 2020
                </div>
            </div>
        );
    }
}
