import styled from 'styled-components';
import { colors } from '../../components/data/data';

export const PortfolioMain = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
`;

// container for horizontal scroll instruction:
// <- scroll to see more ->
// container float: https://codepen.io/MarioDesigns/pen/woJgeo
// https://medium.com/@matt.readout/adding-css-animations-with-styled-components-6c191c23b6ba
// left/right arrow fade out when at end
export const PortfolioHeaderContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 80px;
    width: 300px;
    margin: 10px 10px 10px 10px;
    background: ${colors.grey};
`;

export const PortfolioHeader = styled.h4`
    color: ${colors.teal};
    text-transform: uppercase;
    letter-spacing: 0.1rem;
`;

export const PortfolioArrowLeft = styled.img`
    transform: scale(-1, 1);
    max-width: 40px;
`;

export const PortfolioArrowRight = styled.img`
    max-width: 40px;
`;