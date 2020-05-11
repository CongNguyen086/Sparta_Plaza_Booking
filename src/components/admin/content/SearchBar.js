import React from 'react';
import { Form, Input } from 'antd';
import { SearchOutlined, CloseCircleOutlined } from '@ant-design/icons'

const SearchBar = ({ searchText, placeholder, onChangeSearchText }) => (
    <div className="searchBar">
        {/* <Form layout="inline">
            <FormItem label="Name"> */}
                <Input
                    placeholder={placeholder}
                    prefix={<SearchOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                    value={searchText}
                    suffix={searchText
                        ? <CloseCircleOutlined onClick={() => onChangeSearchText('')}  />
                        : null
                    }
                    onChange={e => onChangeSearchText(e.target.value)}
                    style={{ width: '40%' }}
                />
            {/* </FormItem>
        </Form> */}
    </div>
);

export default SearchBar;
