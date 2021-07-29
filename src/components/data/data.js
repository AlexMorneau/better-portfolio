// images
import imgSplash from '../../media/splash/face.jpg';

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
        img: '',
        description: <div>Hello! My name is Alex, I'm from the GTA and I'm super passionate about coding, focusing primarily on web development. I went to Seneca for Computer Programming and Analysis, and while there I also interned at Websdepot and developed my own web apps. I enjoy diving into projects and I try to bring positive energy and enthusiasm to any team that I'm a part of. Prior to programming I worked as a personal banker.</div>,
        url: ''
    },
    mySkills: {
        title: 'my skills',
        img: '',
        description: <div>Most of my work is done in Javascript, HTML, and CSS, often defaulting to React or Next.js as my preferred frameworks. However, I am comfortable with Angular.js and Node.js with Express. I know a number of query languages, including PL/SQL, and I have developed full-stack applications using ASP.NET MVC (C#) and PHP MVC. I also learned the fundamentals of C, C++, Java, and Swift.</div>,
        url: ''
    },
    myInterests: {
        title: 'my interests',
        img: '',
        description: "When I'm not coding, I enjoy producing music. I have been playing piano and guitar from an early age, and that developed into a passion for sound design, building tracks, and mixing & mastering. In the future I aim to publish songs on Spotify! Beyond that, I'm big on coffee, jogging, road trips, dramatic TV shows, and much more.",
        url: ''
    }
}