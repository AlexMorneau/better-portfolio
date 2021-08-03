import React from 'react';
import { 
    PtfPanelContainer,
    PftImageOverlay,
    PtfImageWrapper,
    PtfImage,
    PtfPanelHeader,
    PtfPanelDescription,
    PtfIconWrapper
} from './portfolio-panel.styles';

import ButtonCustom from '../button-custom/button-custom';

const PortfolioPanel = ({ data }) => {
    return (
        <PtfPanelContainer
            onClick={() => window.open(data.url, '_newtab')}>
            <PtfImageWrapper>
                <PftImageOverlay></PftImageOverlay>
                <PtfImage src={data.img} />
            </PtfImageWrapper>
            <PtfPanelHeader>{data.title}</PtfPanelHeader>
            <PtfPanelDescription>{data.description}</PtfPanelDescription>
            <PtfIconWrapper></PtfIconWrapper>
            <ButtonCustom
                buttonText={data.button}
                buttonLink={data.buttonUrl}
                buttonExternal={data.external} />
            
        </PtfPanelContainer>
    )
}

export default PortfolioPanel;
