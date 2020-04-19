import React, { Fragment } from 'react'
import logo from '../_media/logo-footer.png'
import { company, services } from '../../../../_mocks/footerNavigateMock'
// Components
import WidgetContainer from './WidgetContainer'
import WidgetTitle from './WidgetTitle'
import Info from './Info'
import ShareGroupButton from './ShareGroupButton'
import Signup from './Signup'

export default function MainContent() {
    return (
        <div className="container">
            <div className="row">
                <div className="footer-main-content-elements">
                    {/* Main Info */}
                    <div className="footer-main-content-element col-sm-4">
                        <WidgetContainer className="vk-widget-footer-1"
                            title={<WidgetTitle isImage={true} src={logo} />}
                            content={
                                <React.Fragment>
                                    <Info />
                                    <ShareGroupButton />
                                </React.Fragment>
                            }
                        />
                    </div>
                    {/* Company */}
                    <div className="footer-main-content-element col-sm-2">
                        <WidgetContainer className="vk-widget-footer-1"
                            title={<WidgetTitle text='Company' />}
                            content={
                                <ul className="vk-widget-content-2">
                                    {company.map(el => (
                                        <li key={el.text}>
                                            <a href={el.url}>
                                                <i className="fas fa-angle-right" aria-hidden="true" />
                                                {el.text}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            }
                        />
                    </div>
                    {/* Services */}
                    <div className="footer-main-content-element col-sm-2">
                        <WidgetContainer className="vk-widget-footer-1"
                            title={<WidgetTitle text='Services' />}
                            content={
                                <ul className="vk-widget-content-2">
                                    {services.map(el => (
                                        <li key={el.text}>
                                            <a href={el.url}>
                                                <i className="fas fa-angle-right" aria-hidden="true" />
                                                {el.text}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            }
                        />
                    </div>
                    {/* SignUp */}
                    <div className="footer-main-content-element col-sm-4">
                        <WidgetContainer className="vk-widget-footer-1"
                            title={<WidgetTitle text='Sign up for newletter' />}
                            content={<Signup />}
                        />
                        <WidgetContainer className="vk-widget-footer-4">
                            <div className="widget-title">
                                <WidgetTitle text='Sign up for newletter' />
                            </div>
                            <div className="widget-content">
                                <Signup />
                            </div>
                        </WidgetContainer>
                    </div>
                </div>
            </div>
        </div>
    )
}