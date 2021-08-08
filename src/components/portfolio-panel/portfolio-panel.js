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
import ReactTooltip from 'react-tooltip';

import { BsLink45Deg } from "react-icons/bs";


const PortfolioPanel = ({ data }) => {
    return (
        <PtfPanelContainer
            >
            <PtfImageWrapper>
                <BsLink45Deg data-tip="test" />
                <ReactTooltip />
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
