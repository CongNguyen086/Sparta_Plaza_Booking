import React from 'react'
// const status = (
//     <div>
//         <a className='status-dropdown'>Active</a>
//         <a className='status-dropdown'>Inactive</a>
//     </div>
// )
// const renderStatus = () => (
//     <Dropdown
//         overlay={status}
//         trigger={['click']}
//     >
//         <a className='menu-item' onClick={() => {}}>
//             <span>{item} </span>
//             <DownOutlinedCustom />
//         </a>
//     </Dropdown>
// )
const columns = [
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
                <a style={{ marginRight: 4, color: '#b0914f' }}>Edit</a>
                <span>|</span>
                <a style={{ marginLeft: 4, color: '#b0914f' }}>Delete</a>
            </span>
        ),
        width: '120px',
        align: 'center',
    },
];

export default columns;
