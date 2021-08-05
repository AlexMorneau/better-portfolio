import React from 'react';

import { aboutData } from '../../components/data/data';
import { AboutMain } from './about.styles';
import AboutPanel from '../../components/about-panel/about-panel';

const About = () => {

    return (
        <div>
            <AboutMain>
                <AboutPanel data={aboutData.aboutMe} />
                <AboutPanel data={aboutData.mySkills} />
                <AboutPanel data={aboutData.myInterests} />
            </AboutMain>
            
        </div>
    )
}

export default About
