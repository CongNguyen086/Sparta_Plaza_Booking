import React from 'react'
import styled from 'styled-components'
import { mainTone } from '../../../../constants/color'

const ContentContainer = styled.div`
    margin-top: 10px;
`;
const MainContent = styled.span`
    display: block;
    font-size: 15px;
`;
const ExtraContent = styled.span`
    display: block;
    color: #7B7B7B;
    font-family: "Raleway", sans-serif;
    font-style: italic;
`;
const MainBenefitContainer = styled.div`
    margin: 10px 0 20px;
`;
const BreakfastWrap = styled.p`
    display: inline;
`;
const PromotionWrap = styled.p`
    margin-left: 20px;
    display: inline;
`;
const Icon = styled.i`
    margin-right: 5px;
    color: ${mainTone};
`;
const MainBenefit = styled.span`
    color: ${mainTone};
    font-weight: bold;
`;

export default function CollapsePanelContent({ roomItem: { description, promotion } }) {
    return (
        <ContentContainer>
            <div>
                <MainContent>
                    {description}
                </MainContent>
                <ExtraContent>(Price not including taxes &amp; fees)</ExtraContent>
            </div>
            <MainBenefitContainer>
                <BreakfastWrap>
                    <Icon className="fa fa-coffee" aria-hidden="true" />
                    <MainBenefit>Breakfast included</MainBenefit>
                </BreakfastWrap>
                <PromotionWrap>
                    <Icon className="fa fa-angle-double-up" aria-hidden="true" />
                    <MainBenefit>{promotion}</MainBenefit>
                </PromotionWrap>
            </MainBenefitContainer>
        </ContentContainer>
    )
}