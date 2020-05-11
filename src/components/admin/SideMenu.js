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
import { Link, withRouter } from 'react-router-dom';

const { Sider } = Layout
const { SubMenu, Item, ItemGroup } = Menu

function SideMenu({ collapsed, role, location }) {
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
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['/admin']}
                    selectedKeys={[location.pathname]}
                >
                    {role == 'Admin'
                        ? (<Item key='/admin'>
                            <DashboardOutlined />
                            <Link to='/admin'>Dashboard</Link>
                        </Item>)
                        : (<Item key='/admin/arrange'>
                            <ScheduleOutlined />
                            <Link to='/admin/arrange'>Arrange Booking</Link>
                        </Item>)
                    }
                    <ItemGroup key='management' title='MANAGEMENT'>
                        <Item key='/admin/roomcatalog'>
                            <HomeOutlined />
                            <Link to='/admin/roomcatalog'>Room Catalog</Link>
                        </Item>
                        <Item key='/admin/room'>
                            <PictureOutlined />
                            <Link to='/admin/room'>Room</Link>
                        </Item>
                        <Item key='/admin/promotion'>
                            <NotificationOutlined />
                            <Link to='/admin/promotion'>Promotion</Link>
                        </Item>
                        <Item key='/admin/booking'>
                            <CarryOutOutlined />
                            <Link to='/admin/booking'>Booking</Link>
                        </Item>
                        <Item key='/admin/guest'>
                            <UserOutlined />
                            <Link to='/admin/guest'>Guest</Link>
                        </Item>
                    </ItemGroup>
                    {role == 'Admin'
                        ? (<ItemGroup key='hr' title='HUMAN RESOURCES'>
                            <Item key='/admin/staff'>
                                <TeamOutlined />
                                <Link to='/admin/staff'>Staff</Link>
                            </Item>
                            <Item key='/admin/receptionist'>
                                <UserSwitchOutlined />
                                <Link to='/admin/receptionist'>Receptionist</Link>
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

export default withRouter(SideMenu)