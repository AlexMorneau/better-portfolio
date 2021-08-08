import React, { useEffect } from 'react';

import ScrollToTop from '../../components/scroll-to-top/scroll-to-top';

import {
    PortfolioMain,
    PortfolioGrid
} from './portfolio.styles';
import './portfolio.css';

import PortfolioPanel from '../../components/portfolio-panel/portfolio-panel';

import { portfolioData } from '../../components/data/data';

const Portfolio = () => {
    useEffect(() => {
        document.title = "Alex Morneau | Portfolio"
      }, []);

    return (
        <div className="portfolio-parent">
            <ScrollToTop />
            
            <PortfolioMain>
                <PortfolioGrid>
                {
                    portfolioData.map((project) => (
                        <PortfolioPanel data={project} />
                    ))
                }
                </PortfolioGrid>

            </PortfolioMain>
        </div>
    )
}

export default Portfolio;
