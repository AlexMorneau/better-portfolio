import React from 'react';

import vid from '../../media/background/video.mp4';
import {
    MainBackground,
    VideoOverlay,
    VideoPlayer
} from './background.styles';

// background opacity default set to 0.85

const Background = ({ opacity }) => {
    return (
        <MainBackground>
            <VideoOverlay
                opacityBg={opacity} />
            <VideoPlayer
                autoPlay
                loop
                muted
                src={vid} 
                type='video/mp4'/>
        </MainBackground>
    )
}

export default Background;
