import React from 'react';

import { 
    PanelContainer,
    PanelImageWrapper,
    PanelImage,
    PanelTitle,
    PanelDescription
} from './about-panel.styles';

import ButtonCustom from '../button-custom/button-custom';

// About page imports data/aboutData
// About passes aboutData.aboutMe ... (repeat 3X, 1 per subobject)
// About Panel supplies component with data (ie. data.title)

const AboutPanel = ({ data }) => {
    return (
        <PanelContainer>
            <PanelImageWrapper className="image_wrapper">
                <PanelImage
                    src={data.img}
                    alt={data.alt} />
            </PanelImageWrapper>
            <PanelTitle>{data.title}</PanelTitle>
            <PanelDescription>{data.description}</PanelDescription>
            <ButtonCustom
                buttonText={data.button}
                buttonLink={data.url}
                buttonExternal={data.external} />
        </PanelContainer>
    )
}

export default AboutPanel;
