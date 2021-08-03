import React from 'react';
import { 
    SplashMain,
    SplashContainer,
    SplashTopText,
    SplashImage,
    SplashHeader,
    SplashSubheader,
    SplashDescription
} from './splash.styles';

import { splashData as data } from '../../components/data/data';
import Background from '../../components/background/background';
import ButtonCustom from '../../components/button-custom/button-custom';

// FRAMER MOTION
// https://www.youtube.com/watch?v=YxLMAk2H3ns
// https://www.youtube.com/watch?v=3QrkCmsfewM this one


const Splash = () => {
    return (
        <SplashMain>
            <Background opacity={0.6} />
            <SplashContainer>
                <SplashTopText>{data.topText}</SplashTopText>
                <SplashImage src={data.img} />
                <SplashHeader data-header={data.header}>{data.header}</SplashHeader>
                <SplashSubheader>{data.subheader}</SplashSubheader>
                <SplashDescription>{data.description}</SplashDescription>
                <ButtonCustom
                    buttonLink="/about"
                    buttonText="enter" />
            </SplashContainer>
        </SplashMain>
    )
}

export default Splash;
