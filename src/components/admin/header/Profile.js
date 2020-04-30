import React from 'react'
import { Col, Row, Avatar } from 'antd'
import styled from 'styled-components'

const Name = styled.span`
    color: #7b7b7b;
    font-weight: bold;
    font-size: 14px;
`

export default function Profile({ name, avatar }) {
    return (
        <Row align='middle' justify='end' gutter={5}>
            <Col>
                <Name>{name}</Name>
            </Col>
            <Col>
                <Avatar shape='square' src={avatar} />
            </Col>
        </Row>
    )
}
