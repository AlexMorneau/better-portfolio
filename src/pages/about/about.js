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
            <AboutMain>
                <AboutPanel data={aboutData.aboutMe} />
                <AboutPanel data={aboutData.mySkills} />
                <AboutPanel data={aboutData.myInterests} />
            </AboutMain>
            
        </div>
    )
}

export default About
