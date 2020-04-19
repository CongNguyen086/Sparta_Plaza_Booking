import React from 'react'
import { Card } from 'antd'
import styled from 'styled-components'
import { displayOccupancy } from '../../../../utils'

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
    let maxOccupancy = displayOccupancy(adultNumber, childNumber)
    return (
        <div>
            <StyleGrid hoverable={false}>
                <ExtraBenefitWrap>
                    <Icon className="fas fa-users" aria-hidden="true" />
                    <span>{maxOccupancy}</span>
                </ExtraBenefitWrap>
                <ExtraBenefitWrap>
                    <Icon className="fas fa-binoculars" aria-hidden="true" />
                    <span>{view}</span>
                </ExtraBenefitWrap>
            </StyleGrid>
            <StyleGrid hoverable={false}>
                <ExtraBenefitWrap>
                    <Icon className="fas fa-bed" aria-hidden="true" />
                    <span>{bed}</span>
                </ExtraBenefitWrap>
                <ExtraBenefitWrap>
                    <Icon className="fas fa-wifi" aria-hidden="true" />
                    <span>Wifi</span>
                </ExtraBenefitWrap>
            </StyleGrid>
            <StyleGrid hoverable={false}>
                <ExtraBenefitWrap>
                    <Icon className="fas fa-television" aria-hidden="true" />
                    <span>Television</span>
                </ExtraBenefitWrap>
                <ExtraBenefitWrap>
                    <Icon className="fas fa-recycle" aria-hidden="true" />
                    <span>Air conditioning</span>
                </ExtraBenefitWrap>
            </StyleGrid>
        </div>
    )
}