import React, { useState, useEffect } from 'react'
import { Form, Input, Divider, Radio } from 'antd'
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector'
import styled from 'styled-components'
// Components
import DefaultButton from '../../DefaultButton'
import PaypalButton from './PaypalButton'

const FormItem = styled(Form.Item)`margin-bottom: 15px;`

export default function MyInformation(props) {
    const {
        user: { firstName, lastName, email, phone, address, country, region },
        handleInputChange,
        handleCountryChange,
        handleRegionChange,
        handleConfirm,
        ...paypalProps
    } = props
    const [paymentMethod, setMethod] = useState('paypal')
    useEffect(() => { console.log(paymentMethod) })

    const handlePaymentChange = e => {
        setMethod(e.target.value)
    }

    return (
        <div className="vk-make-a-reservation-left">
            <Divider orientation='left'>
                <h3 className="title-font">Your Informations</h3>
            </Divider>
            <div className="row" style={{ margin: 0 }}>
                <Form layout='vertical'>
                    <FormItem label="First name">
                        <Input
                            name='firstName'
                            placeholder="First name"
                            value={firstName}
                            onChange={handleInputChange}
                        />
                    </FormItem>
                    <FormItem label="Last name">
                        <Input
                            name='lastName'
                            placeholder="Last name"
                            value={lastName}
                            onChange={handleInputChange}
                        />
                    </FormItem>
                    <FormItem label="Email">
                        <Input
                            name='email'
                            placeholder="Email"
                            value={email}
                            onChange={handleInputChange}
                        />
                    </FormItem>
                    <FormItem label="Phone">
                        <Input
                            name='phone'
                            placeholder="Phone"
                            value={phone}
                            onChange={handleInputChange}
                        />
                    </FormItem>
                    <FormItem label="Address">
                        <Input
                            name='address'
                            placeholder="Address"
                            value={address}
                            onChange={handleInputChange}
                        />
                    </FormItem>
                    <div className='row'>
                        <FormItem label="Country" className='col-md-6'>
                            <CountryDropdown
                                name='country'
                                defaultOptionLabel='Select country'
                                value={country}
                                onChange={handleCountryChange}
                                classes='ant-input country-dropdown'
                            />
                        </FormItem>
                        <FormItem label="State/Province" className='col-md-6'>
                            <RegionDropdown
                                name='region'
                                defaultOptionLabel='Select state/province'
                                country={country}
                                value={region}
                                onChange={handleRegionChange}
                                classes='ant-input country-dropdown'
                            />
                        </FormItem>
                    </div>
                    {/* Payment */}
                    <Divider orientation='left'>
                        <h3 className="title-font">Payment Method</h3>
                    </Divider>

                    <FormItem style={{ textAlign: 'center' }}>
                        <PaypalButton {...paypalProps} />
                    </FormItem>
                </Form>
            </div>
        </div>
    )
}

{/* <FormItem>
    <Radio.Group onChange={handlePaymentChange} value={paymentMethod}>
        <Radio value='paypal' className='paypal-radio-wrapper'>
            <img src={require('../../_media/payment/paypal.png')}
                alt="PayPal acceptance mark"
                className="img-responsive" style={{ display: 'inline', maxWidth: '20%' }} />
        </Radio>

        <Radio value='card' className='mastercard-radio-wrapper'>
            <img src={require('../../_media/payment/card_mark.png')}
                alt="Master card acceptance mark"
                className="img-responsive" style={{ display: 'inline', maxWidth: '45%' }} />
        </Radio>
    </Radio.Group>
</FormItem> */}