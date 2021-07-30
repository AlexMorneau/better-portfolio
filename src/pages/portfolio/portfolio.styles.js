import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { colors } from '../../components/data/data';

// ############### ANIMATIONS

const FloatingAnimation = keyframes`
    0% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-10px);
    }
    100% {
        transform: translateY(0px);
    }
`;



// ############### STYLED COMPONENTS

export const PortfolioMain = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
`;

export const PortfolioHeaderContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 80px;
    width: 500px;
    margin: 10px 10px 10px 10px;
    opacity: 0.8;
    transition: 300ms ease-in-out;

    /* animation */
    animation-name: ${FloatingAnimation};
    animation-duration: 10s;
    animation-iteration-count: infinite;

    &:hover {
        opacity: 1;
        transition: 300ms ease-in-out;
    }
`;

export const PortfolioHeader = styled.h4`
    color: ${colors.teal};
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    animation: text-flicker 2s linear infinite;
    cursor: default;
`;

export const PortfolioArrowLeft = styled.img`
    transform: scale(-1, 1);
    cursor: default;
    max-width: 30px;
    transition: 300ms ease-in-out;
`;

export const PortfolioArrowRight = styled.img`
    cursor: default;
    max-width: 30px;
    transition: 300ms ease-in-out;
`;


