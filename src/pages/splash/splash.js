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


const Splash = () => {
    return (
        <div>
            <SplashMain>
                <SplashContainer>
                    <SplashTopText>{data.topText}</SplashTopText>
                    <SplashImage />
                    <SplashHeader>{data.header}</SplashHeader>
                    <SplashSubheader>{data.subheader}</SplashSubheader>
                    <SplashDescription>{data.description}</SplashDescription>
                </SplashContainer>
            </SplashMain>
        </div>
    )
}

export default Splash;
