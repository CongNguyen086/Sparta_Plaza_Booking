import React from 'react'
import { Layout, Input, Row, Col, Affix, Button, Badge } from 'antd'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    MailOutlined,
    BarChartOutlined,
    AppstoreOutlined,

} from '@ant-design/icons'
import styled from 'styled-components'
// Components
import Profile from './Profile'

const { Header } = Layout
const { Search } = Input
const iconStyle = {
    color: '#b0914f',
    fontSize: '20px',
    verticalAlign: 'middle',
}
const Title = styled.span`
    line-height: 50px;
    font-weight: bold;
` 

export default function AdminHeader({ collapsed, onClick, pageName }) {
    return (
        <Affix>
            <Header className="site-layout-background">
                <Row align='middle' gutter={12} className='top-header'>
                    <Col flex={1}>
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: onClick,
                        })}
                    </Col>
                    <Col flex={25}>
                        <Search
                            placeholder="Search"
                            onSearch={value => console.log(value)}
                            enterButton
                            size='large'
                            style={{ verticalAlign: 'middle' }}
                        />
                    </Col>
                    <Col flex={1} >
                        <Badge count={5}>
                            <Button type='link' style={{ marginLeft: 30, padding: 0, height: 'auto' }}>
                                <MailOutlined style={iconStyle} />
                            </Button>
                        </Badge>
                    </Col>
                    <Col flex={1}>
                        <Button type='link' style={{ padding: 0, height: 'auto' }}>
                            <BarChartOutlined style={iconStyle} />
                        </Button>
                    </Col>
                    <Col flex={1}>
                        <Button type='link' style={{ padding: 0, height: 'auto' }}>
                            <AppstoreOutlined style={iconStyle} />
                        </Button>
                    </Col>
                    <Col>
                        <Button type='link' style={{ padding: 0, height: 'auto' }}>
                            <Profile name='James Nguyen' avatar={require('../../../assets/media/user_avatar_sm/300_25.jpg')} />
                        </Button>
                    </Col>
                </Row>

                <Row style={{ padding: '0 30px' }}>
                    <Title>{pageName}</Title>
                </Row>
            </Header>
        </Affix>
    )
}
