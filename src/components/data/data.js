
// ######################## IMPORTS

// images - 'splash' and 'about'
import imgSplash from '../../media/splash/face.jpg';
import imgAboutMe from '../../media/about/aboutme.jpg';
import imgMySkills from '../../media/about/myskills.png';
import imgMyInterests from '../../media/about/myinterests.jpg';

// images - 'skills'
import imgAngular from '../../media/skill-icons/angularjs.svg';
import imgC from '../../media/skill-icons/c.svg';
import imgCplusplus from '../../media/skill-icons/cplusplus.svg';
import imgCsharp from '../../media/skill-icons/csharp.svg';
import imgCss from '../../media/skill-icons/css3.svg';
import imgDotNet from '../../media/skill-icons/dot-net.svg';
import imgExpress from '../../media/skill-icons/express.svg';
import imgHtml5 from '../../media/skill-icons/html5.svg';
import imgJava from '../../media/skill-icons/java.svg';
import imgJavascript from '../../media/skill-icons/javascript.svg';
import imgMsSql from '../../media/skill-icons/microsoftsqlserver.svg';
import imgMongoDb from '../../media/skill-icons/mongodb.svg';
import imgMySql from '../../media/skill-icons/mysql.svg';
import imgNext from '../../media/skill-icons/nextjs.svg';
import imgReact from '../../media/skill-icons/react.svg';


// styled components
import { 
    StyledLink, 
    StyledIcon,
    StyledSubheader,
    StyledMainContainer,
    StyledSubcontainer 
} from './data.styles';


// ######################## GLOBAL PROPERTIES

// Color pallette
export const colors = {
    white: 'rgb(237, 237, 237)',
    black: 'rgb(17, 17, 17)',
    grey: 'rgb(43, 43, 43)',
    teal: 'rgb(166, 231, 224)',
    gold: 'rgb(255, 251, 133)',
    red: 'rgb(241, 62, 115)'
}

// External links
export const links = {
    seneca: 'https://www.senecacollege.ca/programs/fulltime/CPA.html',
    websdepot: 'https://www.websdepot.com/',
    github: 'https://github.com/AlexMorneau',
    linkedin: 'https://www.linkedin.com/in/alex-morneau/',
    about: 'about',
    portfolio: '/portfolio',
    contact: '/contact',
    brenlo: 'https://brenlo.com/',
    clothingStore: 'https://clothing-store-2021.herokuapp.com/',
    videogameDirectory: 'https://videogame-directory.netlify.app/',
    cryptoClue: 'https://crypto-clue-7m9nebphl-alexmorneau.vercel.app/',
    instantNewsFeed: 'https://instant-news-feed.vercel.app/',
    musicianDatabase: 'https://ajmorneau-wa-web524-a6.azurewebsites.net/',
    portfolioSite: '',
    gh_clothingStore: 'https://github.com/AlexMorneau/clothing-store',
    gh_videogameDirectory: 'https://github.com/AlexMorneau/videogame-directory',
    gh_cryptoClue: 'https://github.com/AlexMorneau/Crypto-Clue',
    gh_instantNewsFeed: 'https://github.com/AlexMorneau/instant-news-feed',
    gh_musicianDatabase: 'https://github.com/AlexMorneau/music-database-db',
    gh_portfolio: 'https://github.com/AlexMorneau/better-portfolio'
}


// ######################## PAGE DATA

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
        title: 'about',
        img: imgAboutMe,
        alt: 'Image of Alex',
        description: <div>Hello! My name is Alex, I'm from the GTA and I'm super passionate about coding, focusing primarily on web development. I went to Seneca for <StyledLink href={links.seneca}>Computer Programming and Analysis</StyledLink>, and while there I also interned at <StyledLink href={links.websdepot}>Websdepot</StyledLink> as well as started developing my own <StyledLink href={links.github}>web apps</StyledLink>. I enjoy diving into projects and I try to bring positive energy and enthusiasm to any team that I'm a part of. Prior to programming I worked as a personal banker at Scotiabank.</div>,
        button: 'linkedin',
        url: links.linkedin,
        external: true
    },
    mySkills: {
        title: 'skills',
        img: imgMySkills,
        alt: 'Image representing my skills',
        description: 
        <StyledMainContainer>
            <StyledSubheader>front end</StyledSubheader>
            <StyledSubcontainer>
                <StyledIcon src={imgReact} alt="reactjs"/>
                <StyledIcon src={imgNext} alt="nextjs"/>
                <StyledIcon src={imgAngular} alt="angularjs"/>
                <StyledIcon src={imgDotNet} alt="dot-net"/>
            </StyledSubcontainer>
            <StyledSubheader>back end</StyledSubheader>
            <StyledSubcontainer>
                <StyledIcon src={imgMongoDb} alt="mongo-db"/>
                <StyledIcon src={imgExpress} alt="express"/>
                <StyledIcon src={imgMySql} alt="my-sql"/>
                <StyledIcon src={imgMsSql} alt="ms-sql"/>
            </StyledSubcontainer>
            <StyledSubheader>languages</StyledSubheader>
            <StyledSubcontainer>
                <StyledIcon src={imgJavascript} alt="javascript"/>
                <StyledIcon src={imgHtml5} alt="html5"/>
                <StyledIcon src={imgCss} alt="css"/>
                <StyledIcon src={imgJava} alt="java"/>
                <StyledIcon src={imgC} alt="c"/>
                <StyledIcon src={imgCplusplus} alt="c-plus-plus"/>
                <StyledIcon src={imgCsharp} alt="c-sharp"/>
            </StyledSubcontainer>
        </StyledMainContainer>,
        button: 'github',
        url: links.github,
        external: true
    },
    myInterests: {
        title: 'interests',
        img: imgMyInterests,
        alt: 'Image representing my interests',
        description: <div>When I'm not coding, I enjoy producing music. I have been playing piano and guitar from an early age, and that developed into a passion for sound design, building tracks, and mixing & mastering. In the future I aim to publish songs on Spotify! Beyond that, I'm big on coffee, jogging, road trips, dramatic TV shows, and much more.</div>,
        button: 'say hello',
        url: links.contact,
        external: false
    }
}


// Portfolio page
export const portfolioData = {
    brenlo: {
        url: links.brenlo,
        img: '',
        title: 'brenlo',
        description: '',
        concepts: '',
        button: 'visit',
        buttonUrl: links.brenlo,
        external: true
    },
    clothingStore: {
        url: links.clothingStore,
        img: '',
        title: 'clothing store',
        description: '',
        concepts: '',
        button: 'github',
        buttonUrl: links.gh_clothingStore,
        external: true
    },
    videogameDirectory: {
        url: links.videogameDirectory,
        img: '',
        title: 'videogame data api',
        description: '',
        concepts: '',
        button: 'github',
        buttonUrl: links.gh_videogameDirectory,
        external: true
    },
    cryptoClue: {
        url: links.cryptoClue,
        img: '',
        title: 'crypto clue',
        description: '',
        concepts: '',
        button: 'github',
        buttonUrl: links.gh_cryptoClue,
        external: true
    },
    instantNewsFeed: {
        url: links.instantNewsFeed,
        img: '',
        title: 'instant news feed',
        description: '',
        concepts: '',
        button: 'github',
        buttonUrl: links.gh_instantNewsFeed,
        external: true
    },
    musicianDatabase: {
        url: links.musicianDatabase,
        img: '',
        title: 'music dbms',
        description: '',
        concepts: '',
        button: 'github',
        buttonUrl: links.gh_musicianDatabase,
        external: true
    },
    portfolio: {
        url: links.portfolio,
        img: '',
        title: 'this website!',
        description: '',
        concepts: '',
        button: 'github',
        buttonUrl: links.gh_portfolio,
        external: true
    }
}