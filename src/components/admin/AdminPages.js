import React, { useState } from 'react'
import { Layout } from 'antd';
import './_assets/css/admin.css'
// Components
import SideMenu from './SideMenu'
import AdminHeader from './header/Header'
import AdminContent from './content/AdminContent';

export default function AdminPages() {
    const [isCollapsed, setToggle] = useState(false)
    
    const onToggle = () => {
        setToggle(!isCollapsed)
    }

    return (
        <Layout className='layout-container'>
            <SideMenu collapsed={isCollapsed} />
            <Layout className="site-layout">
                <AdminHeader
                    pageName='Dashboard'
                    collapsed={isCollapsed}
                    onClick={onToggle}
                />
                <AdminContent />
                {/* <Footer /> */}
            </Layout>
        </Layout>
    )
}
