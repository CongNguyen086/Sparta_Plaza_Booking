import React from 'react'
import { Row, Col } from 'antd'

export default function RoomInfo({ roomItem: { type, adultNumber, childNumber, view, bed, promotion, price },
                            extraTitle, button, isGridInfo }) {
    let adult = adultNumber > 1 ? `${adultNumber} Adults` : `${adultNumber} Adult`
    let child = childNumber > 1 ? `${childNumber} Children` : `${childNumber} Child`
    let maxOccupancy = adult + ', ' + child
    let mainInfo = view + ', ' + bed
    let ulClassName = isGridInfo ? 'room-info-custom-grid' : 'room-info-custom'
    return (
        <div className="vk-dark-our-room-item-right vk-clear-padding">
            <div className="vk-dark-our-room-item-content" style={{ marginTop: 10 }}>
                <Row align="middle">
                    <Col span={17}>
                        <h3><a href="#">{type}</a></h3>
                    </Col>
                    <Col span={7}>
                        {extraTitle}
                    </Col>
                </Row>

                <ul className={ulClassName}>
                    <li>
                        <p>
                            <i className="fa fa-users" aria-hidden="true" />
                            <span>{maxOccupancy}</span>
                        </p>
                    </li>
                    <li>
                        <p>
                            <i className="fa fa-info-circle" aria-hidden="true" />
                            <span>{mainInfo}</span>
                        </p>
                    </li>
                    <li>
                        <p>
                            <i className="fa fa-coffee" aria-hidden="true" />
                            <span>Breakfast Included</span>
                        </p>
                    </li>
                    <li>
                        <p>
                            {/* if (promotion != null) */}
                            <i className="fa fa-angle-double-up" aria-hidden="true" style={{ marginLeft: '2px' }} />
                            <label style={{ color: '#b0914f' }}>
                                {promotion}
                            </label>
                        </p>
                    </li>
                </ul>

                <div className="vk-dark-our-room-item-book" style={{ marginTop: '50px' }}>
                    <div className="vk-dark-our-room-item-book-left">
                        <ul>
                            <li>
                                <p>Price: </p>
                            </li>
                            <li>
                                <p>${price}/ <span>Night</span></p>
                            </li>
                        </ul>
                    </div>
                    <div className="vk-dark-our-room-item-book-right">
                        {/* <Button name={buttonName} /> */}
                        {button}
                    </div>
                    <div className="clearfix" />
                </div>
            </div>
        </div>
    )
}

RoomInfo.defaultProps = { isGridInfo: false }