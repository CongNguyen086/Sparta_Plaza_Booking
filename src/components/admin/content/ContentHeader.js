import React from 'react'
import { PageHeader } from 'antd'

export default function ContentHeader({ pageName, routes }) {
    return (
        <PageHeader
            className="site-page-header"
            title={<span className='page-header-text'>{pageName}</span>}
            breadcrumb={{ routes }}
        />
    )
}
