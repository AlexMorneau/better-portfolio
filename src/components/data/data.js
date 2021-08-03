
// ######################## IMPORTS

// images - 'splash' and 'about' | photos of me
import imgSplash from '../../media/splash/face.jpg';
import imgAboutMe from '../../media/about/aboutme.jpg';
import imgMySkills from '../../media/about/myskills.png';
import imgMyInterests from '../../media/about/myinterests.jpg';

// images - 'skills' and 'portfolio' | tech stack icons
import imgAngular from '../../media/skill-icons/angularjs.svg';
import imgTypescript from '../../media/skill-icons/typescript.svg';
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

// images - 'portfolio' | screenshots of my work
import imgBrenlo from '../../media/portfolio/screenshot/brenlo.png';
import imgClothingStore from '../../media/portfolio/screenshot/clothing-store.png';
import imgCryptoClue from '../../media/portfolio/screenshot/crypto-clue.png';
import imgMusicianDb from '../../media/portfolio/screenshot/musician-db.png';
import imgNewsFeed from '../../media/portfolio/screenshot/news-feed.png';
import imgPortfolio from '../../media/portfolio/screenshot/portfolio.png';
import imgVgdb from '../../media/portfolio/screenshot/vgdb.png';


// styled components
import { 
    StyledLink, 
    StyledIcon,
    StyledSubheader,
    StyledMainContainer,
    StyledSubcontainer 
} from './data.styles';

// tooltips
import ReactTooltip from 'react-tooltip';


// ######################## GLOBAL PROPERTIES

// Color pallette
export const colors = {
    white: 'rgb(237, 237, 237)',
    black: 'rgb(17, 17, 17)',
    grey: 'rgb(43, 43, 43)',
    lightGrey: 'rgb(60, 60, 60)',
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
        description: <div>Hello! My name is Alex, I'm super passionate about coding with a focus on web development. I went to Seneca for <StyledLink href={links.seneca}>Computer Programming and Analysis</StyledLink>, and while there I also interned at <StyledLink href={links.websdepot}>Websdepot</StyledLink> as well as started developing my own <StyledLink href={links.github}>web apps</StyledLink>. I enjoy diving into projects and I try to bring positive energy and enthusiasm to any team that I'm a part of.</div>,
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
                <StyledIcon src={imgReact} alt="reactjs" data-tip="React.js" />
                <StyledIcon src={imgNext} alt="nextjs" data-tip="Next.js" />
                <StyledIcon src={imgAngular} alt="angularjs" data-tip="AngularJS" />
                <StyledIcon src={imgDotNet} alt="dot-net" data-tip="ASP.NET" />
            </StyledSubcontainer>
            <ReactTooltip />
            <StyledSubheader>back end</StyledSubheader>
            <StyledSubcontainer>
                <StyledIcon src={imgMongoDb} alt="mongo-db" data-tip="MongoDB" />
                <StyledIcon src={imgExpress} alt="express" data-tip="Express" />
                <StyledIcon src={imgMySql} alt="my-sql" data-tip="MySQL" />
                <StyledIcon src={imgMsSql} alt="ms-sql" data-tip="Microsoft SQL Server" />
            </StyledSubcontainer>
            <ReactTooltip />
            <StyledSubheader>languages</StyledSubheader>
            <StyledSubcontainer>
                <StyledIcon src={imgJavascript} alt="javascript" data-tip="Javascript" />
                <StyledIcon src={imgTypescript} alt="typescript" data-tip="Typescript" />
                <StyledIcon src={imgHtml5} alt="html5" data-tip="HTML5" />
                <StyledIcon src={imgCss} alt="css" data-tip="CSS / Sass" />
                <StyledIcon src={imgJava} alt="java" data-tip="Java" />
                <StyledIcon src={imgCplusplus} alt="c-plus-plus" data-tip="C++" />
                <StyledIcon src={imgCsharp} alt="c-sharp" data-tip="C#" />
            </StyledSubcontainer>
            <ReactTooltip />
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
export const portfolioData = [
    {
        url: links.brenlo,
        img: imgBrenlo,
        title: 'brenlo',
        description: 'A client website I helped design and develop using PHP MVC and Wordpress while working at Websdepot. This included most page layouts, navigation, animations, and certain elements of the catalogue.',
        icons: '',
        button: 'visit',
        buttonUrl: links.brenlo,
        external: true
    },
    {
        url: links.clothingStore,
        img: imgClothingStore,
        title: 'clothing shop',
        description: 'temporary text',
        icons: '',
        button: 'github',
        buttonUrl: links.gh_clothingStore,
        external: true
    },
    {
        url: links.videogameDirectory,
        img: imgVgdb,
        title: 'videogame directory',
        description: 'VGDirectory pulls data from RAWG API (https://rawg.io/apidocs), and presents a list of games that can be searched, filtered, or selected. Upon selection a details page is rendered along with media corresponding to the game, such as a banner image, screenshots, trailers, and metacritic rating.',
        icons: '',
        button: 'github',
        buttonUrl: links.gh_videogameDirectory,
        external: true
    },
    {
        url: links.cryptoClue,
        img: imgCryptoClue,
        title: 'crypto clue',
        description: 'A simple cryptocurrency hub that fetches and presents an array of organized crypto data in table format, providing a search bar to narrow results by the symbol (ticker) or coin name. CoinGecko API (https://www.coingecko.com/en/api) is used.',
        icons: '',
        button: 'github',
        buttonUrl: links.gh_cryptoClue,
        external: true
    },
    {
        url: links.instantNewsFeed,
        img: imgNewsFeed,
        title: 'instant news',
        description: 'Instant News Feed queries Canadian news data from NewsAPI.org (https://newsapi.org/) and presents it in a horizontally scrollable list. Pagination is used to limit the results being rendered to the page to reduce loading times.',
        icons: '',
        button: 'github',
        buttonUrl: links.gh_instantNewsFeed,
        external: true
    },
    {
        url: links.musicianDatabase,
        img: imgMusicianDb,
        title: 'music dbms',
        description: 'A relational database management system for performing CRUD operations on Artists, Albums, and Tracks. This web app features layered authentication and authorization roles, Model-View-Controller design architecture, eager loading, migrations & snapshots, conditional elements & menus, LINQ, and much more.',
        icons: '',
        button: 'github',
        buttonUrl: links.gh_musicianDatabase,
        external: true
    },
    {
        url: links.portfolio,
        img: imgPortfolio,
        title: 'this website!',
        description: 'temporary text',
        icons: '',
        button: 'github',
        buttonUrl: links.gh_portfolio,
        external: true
    }
];