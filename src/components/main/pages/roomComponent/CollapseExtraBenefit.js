import React from 'react'
import { Card } from 'antd'
import styled from 'styled-components'

const StyleGrid = styled(Card.Grid)`
    width: 33%;
    padding: 0;
    box-shadow: unset !important;
    padding: 0 !important;
`;
const ExtraBenefitWrap = styled.div`
    margin-bottom: 10px;
`;
const Icon = styled.i`
    margin-right: 5px;
`;

export default function CollapseExtraBenefit({ roomItem: { adultNumber, childNumber, view, bed } }) {
    let adult = adultNumber > 1 ? `${adultNumber} adults` : `${adultNumber} adult`
    let child = childNumber > 1 ? `${childNumber} children` : `${childNumber} child`
    let maxOccupancy = adult + ', ' + child
    return (
        <div>
            <StyleGrid hoverable={false}>
                <ExtraBenefitWrap>
                    <Icon className="fa fa-users" aria-hidden="true" />
                    <span>{maxOccupancy}</span>
                </ExtraBenefitWrap>
                <ExtraBenefitWrap>
                    <Icon className="fa fa-binoculars" aria-hidden="true" />
                    <span>{view}</span>
                </ExtraBenefitWrap>
            </StyleGrid>
            <StyleGrid hoverable={false}>
                <ExtraBenefitWrap>
                    <Icon className="fa fa-bed" aria-hidden="true" />
                    <span>{bed}</span>
                </ExtraBenefitWrap>
                <ExtraBenefitWrap>
                    <Icon className="fa fa-wifi" aria-hidden="true" />
                    <span>Wifi</span>
                </ExtraBenefitWrap>
            </StyleGrid>
            <StyleGrid hoverable={false}>
                <ExtraBenefitWrap>
                    <Icon className="fa fa-television" aria-hidden="true" />
                    <span>Television</span>
                </ExtraBenefitWrap>
                <ExtraBenefitWrap>
                    <Icon className="fa fa-recycle" aria-hidden="true" />
                    <span>Air conditioning</span>
                </ExtraBenefitWrap>
            </StyleGrid>
        </div>
    )
}