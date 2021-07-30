import React from 'react';
import Arrow from '../../media/portfolio/icon/arrow-stroke.svg'

import Background from '../../components/background/background';
import Nav from '../../components/nav/nav';

import {
    PortfolioMain,
    PortfolioHeaderContainer,
    PortfolioHeader,
    PortfolioArrowLeft,
    PortfolioArrowRight
} from './portfolio.styles';

const Portfolio = () => {
    return (
        <div>
            <Background />
            <Nav />
            
            <PortfolioMain>
            <PortfolioHeaderContainer>
                <PortfolioArrowLeft src={Arrow} />
                <PortfolioHeader>scroll to explore!</PortfolioHeader>
                <PortfolioArrowRight src={Arrow} />
            </PortfolioHeaderContainer>


            

        </PortfolioMain>
        </div>
    )
}

export default Portfolio;
