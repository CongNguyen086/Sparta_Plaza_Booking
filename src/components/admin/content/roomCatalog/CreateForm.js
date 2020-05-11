import React, { useState, useEffect } from 'react'
import { Form, Button, Input, Select, Row, Col } from 'antd'
import styled from 'styled-components'
// Components
import FormItem from '../FormItem'
import UploadPhoto from './UploadPhoto'

const Label = styled.span`
    font-weight: bold;
    font-size: 14px
`

const validateMessages = {
    required: '${name} is required!',
    whitespace: 'Please enter a valid ${name}!',
    types: {
        string: 'Please enter a valid ${name}!',
        email: 'Please enter a valid ${name}!',
    },
    string: {
        min: 'Your ${name} must be more than 10 characters!'
    },
    pattern: {
        mismatch: 'Please enter a valid ${name}!',
    },
}

const FormLabel = ({ label }) => <Label>{label}</Label>
const FormItemList = () => {
    return (
        <React.Fragment>
            <FormItem
                name='room_type'
                label='Room Type'
                rules={[{
                    type: 'string',
                    whitespace: true,
                    pattern: /^([^0-9]*)$/,
                }]}
            />
            <FormItem
                name='rate'
                label='Rate'
                type='number'
            />
            <Form.Item
                name='description'
                label={<FormLabel label='Description' />}
                rules={[{
                    type: 'string',
                    min: 11
                }]}
            >
                <Input.TextArea className='register-input' />
            </Form.Item>
            <FormItem
                name='quality_type'
                label='Quality Type'
                rules={[{
                    type: 'string',
                }]}
            />
            <FormItem
                name='bed_description'
                label='Bed'
                rules={[{
                    type: 'string',
                }]}
            />
            <FormItem
                name='view_type'
                label='View Type'
                rules={[{
                    type: 'string',
                }]}
            />
            <FormItem
                name='adult_number'
                label='Adult Number'
                type='number'
            />
            <FormItem
                name='child_number'
                label='Child Number'
                type='number'
            />
            <FormItem
                name='room_quantity'
                label='Room Quantity'
                type='number'
            />
            <Form.Item
                name='status'
                label={<FormLabel label='Status' />}
            >
                <Select className='select-status'>
                    <Select.Option value='Active'>Active</Select.Option>
                    <Select.Option value='Inactive'>Inactive</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item
                name='image'
                label={<FormLabel label='Photo' />}
            >
                <UploadPhoto />
            </Form.Item>
            {/* <FormItem
                name='current_promotion'
                label='PROMOTION'
                rules={[{
                    type: 'string',
                    min: 7
                }]}
            /> */}
        </React.Fragment>
    )
}

export default function CreateForm({ title, submitButton, onFinish, isLoading, isModal }) {
    const [form] = Form.useForm()
    const [, forceUpdate] = useState();

    // To disable submit button at the beginning.
    useEffect(() => {
        forceUpdate({});
    }, []);
 
    let style = {}
    if (!isModal) {
        style = { margin: '0 300px' }
    }

    return (
        <Form
            form={form}
            layout='vertical'
            name='register_form'
            validateMessages={validateMessages}
            onFinish={onFinish}
            className='form-custom'
        >
            <Form.Item>
                <div className='modal-title'>{title}</div>
            </Form.Item>

            <FormItemList />

            <Form.Item>
                <Row gutter={24} align='middle' justify='center' style={style}>
                    <Col span={12}>
                        <Button
                            htmlType='submit'
                            block
                            loading={isLoading}
                            className='submit-btn'
                        >
                            <b>{submitButton}</b>
                        </Button>
                    </Col>
                    <Col span={12}>
                        <Button
                            htmlType='submit'
                            block
                            loading={isLoading}
                            className='cancel-btn'
                        >
                            <b>Cancel</b>
                        </Button>
                    </Col>
                </Row>
            </Form.Item>
        </Form>
    )
}
