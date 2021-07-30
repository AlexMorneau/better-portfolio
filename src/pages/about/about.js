import React from 'react';
import Nav from '../../components/nav/nav';

import { aboutData } from '../../components/data/data';
import { AboutMain } from './about.styles';

import Background from '../../components/background/background';
import AboutPanel from '../../components/about-panel/about-panel';

const About = () => {

    return (
        <div>
            <Background />
            <Nav />
            About
            <AboutMain>
                <AboutPanel data={aboutData.aboutMe} />
            </AboutMain>
            
        </div>
    )
}

export default About
