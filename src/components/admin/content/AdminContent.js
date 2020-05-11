import React from 'react'
import { Layout, Input, Row, Col } from 'antd'
import { Switch, Route, withRouter } from 'react-router-dom'
import menuData from '../../../_mocks/adminMenuMock'
// Components
import Dashboard from './dashboard/Dashboard'
import RoomCatalog from './roomCatalog/RoomCatalog'

const { Content } = Layout

const menuComponent = {
    dashboard: Dashboard,
    room_catalog: RoomCatalog
}

function AdminContent(props) {
    const { match } = props

    const renderMenuItem = menuData => menuData.map(item => {
        const SpecifiedContent = menuComponent[item.name]
        console.log(menuComponent[item.name])
        return <Route
            key={item.name}
            path={`${match.url}${item.url}`}
            exact
            render={() => <SpecifiedContent pageName={item.page} />}
        />
    })

    return (
        <Content className='site-layout-background content-container'>
            <Switch>
                {renderMenuItem(menuData)}
            </Switch>
        </Content>
    )
}

export default withRouter(AdminContent)
