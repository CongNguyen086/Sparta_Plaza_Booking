import React, { Component } from 'react'
import { Select } from 'antd'
import { formalTitleFont } from '../../../constants/font'

const selectInputStyle = {
    width: '100%',
    fontSize: 24,
    fontFamily: formalTitleFont,
    fontWeight: "bold",
    color: 'black',
}

class CustomSelect extends Component {
    render() {
        return (
            <Select
                defaultValue={1}
                defaultActiveFirstOption
                bordered={false}
                style={selectInputStyle}
                dropdownStyle={{ fontFamily: formalTitleFont, fontWeight: "bold" }}
            >
                {this.props.children}
            </Select>
        )
    }
}

export default CustomSelect