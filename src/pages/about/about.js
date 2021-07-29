import React from 'react';
import Nav from '../../components/nav/nav';

import { aboutData } from '../../components/data/data';
import Background from '../../components/background/background';

const About = () => {

    return (
        <div>
            <Background />
            <Nav />
            About
            <div>
                {aboutData.aboutMe.description}
            </div>
        </div>
    )
}

export default About
