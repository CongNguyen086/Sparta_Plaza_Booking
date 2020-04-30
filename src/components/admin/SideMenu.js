import React from 'react'
import { Layout, Menu, Divider, Affix } from 'antd';
import {
    DashboardOutlined,
    ScheduleOutlined,
    HomeOutlined,
    PictureOutlined,
    NotificationOutlined,
    CarryOutOutlined,
    UserOutlined,
    TeamOutlined,
    UserSwitchOutlined,

} from '@ant-design/icons';

const { Sider } = Layout
const { SubMenu, Item, ItemGroup } = Menu

export default function SideMenu({ collapsed, role }) {
    return (
        <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            width={220}
        >
            <Affix>
                <a className="logo" href="#">
                    <img src={require('./_assets/image/LOGO.png')} className="hotel-logo" />
                </a>
                <Divider className='side-menu-divider' />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    {role == 'Admin'
                        ? (<Item key="1">
                            <DashboardOutlined />
                            <span>Dashboard</span>
                        </Item>)
                        : (<Item key="1">
                            <ScheduleOutlined />
                            <span>Arrange Booking</span>
                        </Item>)
                    }
                    <ItemGroup key='management' title='MANAGEMENT'>
                        <Item key="2">
                            <HomeOutlined />
                            <span>Room Catalog</span>
                        </Item>
                        <Item key="3">
                            <PictureOutlined />
                            <span>Room</span>
                        </Item>
                        <Item key="4">
                            <NotificationOutlined />
                            <span>Promotion</span>
                        </Item>
                        <Item key="5">
                            <CarryOutOutlined />
                            <span>Booking</span>
                        </Item>
                        <Item key="6">
                            <UserOutlined />
                            <span>Guest</span>
                        </Item>
                    </ItemGroup>
                    {role == 'Admin'
                        ? (<ItemGroup key='hr' title='HUMAN RESOURCES'>
                            <Item key="7">
                                <TeamOutlined />
                                <span>Staff</span>
                            </Item>
                            <Item key="8">
                                <UserSwitchOutlined />
                                <span>Receptionist</span>
                            </Item>
                        </ItemGroup>)
                        : null
                    }
                </Menu>
            </Affix>
        </Sider>
    )
}

SideMenu.defaultProps = { role: 'Admin' }