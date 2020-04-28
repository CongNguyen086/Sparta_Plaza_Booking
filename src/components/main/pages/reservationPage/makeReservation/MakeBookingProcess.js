import React, { Component } from 'react'
// Components
import MyInformation from './MyInformation'
import MyBooking from './MyBooking'
import SuccessBox from '../SuccessBox'

export default class MakeBookingProcess extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                address: '',
                country: '',
                region: '',
            },
            product: {
                description: 'This is booking description',
                price: 50,
            },
            paymentStatus: ''
        }
    }

    setStateInput = (name, value) => {
        this.setState(prevState => ({
            user: {
                ...prevState.user,
                [name]: value
            }
        }))
    }

    handleChange = e => {
        const target = e.target
        this.setStateInput(target.name, target.value)
    }

    handleCountryChange = val => {
        this.setStateInput('country', val)
    }

    handleRegionChange = val => {
        this.setStateInput('region', val)
    }

    onSuccess = () => {
        this.setState({ paymentStatus: 'success' })
    }

    render() {
        const { user, product, paymentStatus } = this.state
        if (paymentStatus) return <SuccessBox />
        return (
            <div className="row">
                <div className="vk-make-a-reservation-info">
                    <div className="col-md-8">
                        <MyInformation
                            user={user}
                            handleInputChange={this.handleChange}
                            // handleConfirm={this.onClickBookingPayment}
                            handleCountryChange={this.handleCountryChange}
                            handleRegionChange={this.handleRegionChange}
                            product={product}
                            onSuccess={this.onSuccess}
                        />
                    </div>

                    <div className="form-horizontal">
                        <div className="col-md-4">
                            <MyBooking />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

{/* <div className="vk-make-a-reservation-right">
    <h3>Your Reservation</h3>
    <div className="vk-make-a-room">
        <div className="vk-make-a-room1">
            <h3>Room 1 : Double Room <span>($100/night)</span></h3>
            <ul>
                <li>Adult: 2</li>
                <li>Children: 1</li>
                <li>night(s): 2</li>
            </ul>
            <h4>$300.0</h4>
        </div>
        <div className="vk-make-a-room2">
            <h3>Room 2 : Double Twin Room <span>($150/night)</span></h3>
            <ul>
                <li>Adult: 2</li>
                <li>Children: 1</li>
                <li>night(s): 2</li>
            </ul>
            <h4>$450.0</h4>
        </div>
    </div>
    <div className="vk-make-a-total">
        <table className="shop_table shop_table_responsive">
            <tbody>
                <tr className="order-total">
                    <th>Total</th>
                    <td data-title="Tổng cộng">$800.00 </td>
                </tr>
                <tr className="tax-total">
                    <th>Tax 10%</th>
                    <td data-title="Thuế">$80.00</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div className="vk-make-a-grand-total">
        <table className="shop_table shop_table_responsive">
            <tbody>
                <tr className="order-total">
                    <th>Grand Total</th>
                    <td data-title="Grand-total">$880.00 </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div className="vk-make-a-btn">
        <h4><a href="#">Edit Booking</a></h4>
    </div>
</div> */}
