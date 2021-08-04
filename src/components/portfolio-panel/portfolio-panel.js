import React from 'react';
import { 
    PtfPanelContainer,
    PftImageOverlay,
    PftOverlayText,
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
            >
            <PtfImageWrapper>
                <PftOverlayText data-text="visit">visit</PftOverlayText>
                <PftImageOverlay
                    onClick={() => window.open(data.url, '_newtab')} />
                <PtfImage 
                    src={data.img}
                    alt={data.title}
                     />
            </PtfImageWrapper>
            <PtfPanelHeader>{data.title}</PtfPanelHeader>
            <PtfPanelDescription>{data.description}</PtfPanelDescription>
            <PtfIconWrapper>{data.icons}</PtfIconWrapper>
            <ButtonCustom
                buttonText={data.button}
                buttonLink={data.buttonUrl}
                buttonExternal={data.external} />
            
        </PtfPanelContainer>
    )
}

export default PortfolioPanel;
