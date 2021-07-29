import React from 'react';
import { 
    SplashMain,
    SplashBackground,
    SplashVideoOverlay,
    SplashVideoBackground,
    SplashContainer,
    SplashTopText,
    SplashImage,
    SplashHeader,
    SplashSubheader,
    SplashDescription
} from './splash.styles';

import { splashData as data } from '../../components/data/data';
import splashVideo from '../../media/splash/video.mp4';
import ButtonCustom from '../../components/button-custom/button-custom';

// FRAMER MOTION
// https://www.youtube.com/watch?v=YxLMAk2H3ns


const Splash = () => {
    return (
        <SplashMain>
            <SplashBackground>
                <SplashVideoOverlay />
                <SplashVideoBackground
                    autoPlay
                    loop
                    muted
                    src={splashVideo} 
                    type='video/mp4'/>
            </SplashBackground>
            <SplashContainer>
                <SplashTopText>{data.topText}</SplashTopText>
                <SplashImage src={data.img} />
                <SplashHeader>{data.header}</SplashHeader>
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
