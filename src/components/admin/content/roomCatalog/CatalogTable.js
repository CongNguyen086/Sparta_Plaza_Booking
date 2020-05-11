import React, { Component } from 'react'
import { Card, Table, Row, Col } from 'antd'
import { PlusCircleOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
// import columns from './columns'
import ROOT_API_URL from '../../../../constants/root'
import { displayOccupancy } from '../../../../utils'
// Components
import SearchBar from '../SearchBar';
import DefaultButton from '../DefaultButton'
import FormModal from '../FormModal'
import CreateForm from './CreateForm'

let roomCatalogData = []

class CatalogTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            pagination: {
                pageSize: 5,
                showQuickJumper: true,
            },
            selectedRowKeys: [],
            searchText: '',
            loading: true,
            isModalVisible: false,
        };
    }

    columns = [
        {
            key: 'room_type',
            title: 'Room Type',
            dataIndex: 'room_type',
            defaultSortOrder: 'ascend',
            sorter: (a, b) => {
                let first = a.room_type, second = b.room_type
                if (first > second) return 1
                if (first < second) return -1
                return 0
            },
            width: '180px',
            align: 'center',
        },
        {
            key: 'rate',
            title: 'Rate',
            dataIndex: 'rate',
            width: '80px',
            align: 'center',
        },
        {
            key: 'quality_type',
            title: 'Quality Type',
            dataIndex: 'quality_type',
            filters: [
                { text: 'Standard', value: 'Standard' },
                { text: 'Superior', value: 'Superior' },
                { text: 'Delux', value: 'Delux' },
            ],
            onFilter: (value, record) => record.quality_type == value,
            width: '150px',
            align: 'center',
        },
        {
            // Including bed & view
            key: 'info',
            title: 'Info',
            dataIndex: 'info',
            width: '200px',
            align: 'center',
        },
        {
            // Including adult & child number
            key: 'occupancy',
            title: 'Occupancy',
            dataIndex: 'occupancy',
            width: '150px',
            align: 'center',
        },
        {
            key: 'room_quantity',
            title: 'Room Quantity',
            dataIndex: 'room_quantity',
            width: '150px',
            align: 'center',
        },
        {
            key: 'status',
            title: 'Status',
            dataIndex: 'status',
            filters: [
                { text: 'Active', value: 'Active' },
                { text: 'Inactive', value: 'Inactive' },
            ],
            filterMultiple: false,
            onFilter: (value, record) => record.status == value,
            width: '120px',
            align: 'center',
            // render: renderStatus
        },
        {
            key: 'promoteDescription',
            title: 'Promotion',
            dataIndex: 'promoteDescription',
            filters: [
                { text: 'None', value: 'None' },
            ],
            onFilter: (value, record) => record.promoteDescription == value,
            width: '150px',
            align: 'center',
        },
        {
            key: 'action',
            title: 'Action',
            fixed: 'right',
            render: () => (
                <span>
                    <a style={{ marginRight: 4, color: '#b0914f' }}
                        onClick={() => { this.setModalVisible(true) }}
                    >Edit</a>
                    <span>|</span>
                    <a style={{ marginLeft: 4, color: '#b0914f' }}>Details</a>
                </span>
            ),
            width: '120px',
            align: 'center',
        },
    ];

    componentDidMount = async () => {
        const roomTypeList = await this.fetchRoomTypes()
        roomTypeList.forEach(item => {
            item.key = item._id
            item.info = item.bed_description + ', ' + item.view_type
            item.occupancy = displayOccupancy(item.adult_number, item.child_number)
        })
        roomCatalogData = Array.from(roomTypeList)
        this.setState({ data: roomCatalogData, loading: false }, () => console.log(this.state.data))
    }

    fetchRoomTypes = async () => {
        const res = await fetch(ROOT_API_URL + '/roomtype')
        return (await res.json())
    }

    selectRow = record => {
        // const selectedRowKeys = [...this.state.selectedRowKeys]
        // const selectedRowIndex = selectedRowKeys.indexOf(record.key)
        // if (selectedRowIndex >= 0) {
        //     selectedRowKeys.splice(selectedRowIndex, 1)
        // } else {
        //     selectedRowKeys.push(record.key)
        // }
        // this.setState({ selectedRowKeys })
        console.log(record)
    }

    onSelectedRowKeysChange = selectedRowKeys => {
        this.setState({ selectedRowKeys }, () => { console.log(this.state.selectedRowKeys) })
    }

    onChangeSearchText = value => {
        const filteredData = roomCatalogData.filter(item => item.room_type.toLowerCase().indexOf(value) >= 0)
        this.setState({ data: filteredData, searchText: value }, () => console.log(this.state.data))
    }

    setModalVisible(status) {
        this.setState({ isModalVisible: status })
    }

    render() {
        const { loading, data, selectedRowKeys, pagination, searchText, isModalVisible } = this.state

        return (
            <Card bordered={false} className='content-container'>
                <Row align='middle' justify='space-between' style={{ marginBottom: 20 }}>
                    <Col span={12}>
                        <Link to='/admin/roomcatalog/create'>
                            <DefaultButton
                                icon={PlusCircleOutlined}
                                // handleClick={}
                                value='Create'
                            />
                        </Link>
                    </Col>
                    <Col span={12}>
                        <SearchBar
                            placeholder='Search by catalog'
                            searchText={searchText}
                            onChangeSearchText={this.onChangeSearchText}
                        />
                    </Col>
                </Row>

                <Table
                    bordered
                    loading={loading}
                    columns={this.columns}
                    dataSource={data}
                    rowSelection={{
                        selectedRowKeys,
                        onChange: this.onSelectedRowKeysChange,
                    }}
                    onRow={record => ({
                        onClick: () => {
                            this.selectRow(record)
                        }
                    })}
                    pagination={pagination}
                    scroll={{ x: 1500, scrollToFirstRowOnChange: true }}
                />

                <FormModal isVisible={isModalVisible} onCancel={() => { this.setModalVisible(false) }}>
                    <CreateForm title='Update room catalog' submitButton='Update' isModal={true} />
                </FormModal>
            </Card>
        )
    }
}

export default CatalogTable
