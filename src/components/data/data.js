// images
import imgSplash from '../../media/splash/face.jpg';
import imgAboutMe from '../../media/about/aboutme.jpg';
import imgMySkills from '../../media/about/myskills.png';
import imgMyInterests from '../../media/about/myinterests.jpg';

// styled components
import { StyledLink } from './data.styles';

// Color pallette
export const colors = {
    white: 'rgb(237, 237, 237)',
    black: 'rgb(17, 17, 17)',
    grey: 'rgb(43, 43, 43)',
    teal: 'rgb(166, 231, 224)',
    gold: 'rgb(255, 251, 133)'
}

// External links
export const links = {
    seneca: 'https://www.senecacollege.ca/programs/fulltime/CPA.html',
    websdepot: 'https://www.websdepot.com/',
    github: 'https://github.com/AlexMorneau',
    linkedin: 'https://www.linkedin.com/in/alex-morneau/',
    about: 'about',
    portfolio: '/portfolio',
    contact: '/contact'
}

// Splash page
export const splashData = {
    topText: 'welcome',
    img: imgSplash,
    header: 'Alex Morneau',
    subheader: 'Web Developer | Portfolio',
    description: 'Thank you for taking the time to visit my portfolio website. Here you will find some information about me as well as work that I have published. I look forward to hearing from you!'
}

// About page
export const aboutData = {
    aboutMe: {
        title: 'about me',
        img: imgAboutMe,
        alt: 'Image of Alex',
        description: <div>Hello! My name is Alex, I'm from the GTA and I'm super passionate about coding, focusing primarily on web development. I went to Seneca for <StyledLink>Computer Programming and Analysis</StyledLink>, and while there I also interned at <StyledLink>Websdepot</StyledLink> as well as started developing my own <StyledLink>web apps</StyledLink>. I enjoy diving into projects and I try to bring positive energy and enthusiasm to any team that I'm a part of. Prior to programming I worked as a personal banker at Scotiabank.</div>,
        button: 'linkedin',
        url: links.linkedin,
        external: true
    },
    mySkills: {
        title: 'skills',
        img: imgMySkills,
        alt: 'Image representing my skills',
        description: <div>Most of my work is done in Javascript, HTML, and CSS, often defaulting to React or Next.js as my preferred frameworks. However, I am comfortable with Angular.js and Node.js with Express. I know a number of query languages, including PL/SQL, and I have developed full-stack applications using ASP.NET MVC (C#) and PHP MVC. I also learned the fundamentals of C, C++, Java, and Swift.</div>,
        button: 'github',
        url: links.github,
        external: true
    },
    myInterests: {
        title: 'interests',
        img: imgMyInterests,
        alt: 'Image representing my interests',
        description: "When I'm not coding, I enjoy producing music. I have been playing piano and guitar from an early age, and that developed into a passion for sound design, building tracks, and mixing & mastering. In the future I aim to publish songs on Spotify! Beyond that, I'm big on coffee, jogging, road trips, dramatic TV shows, and much more.",
        button: 'say hello',
        url: links.contact,
        external: false
    }
}