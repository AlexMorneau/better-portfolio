import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { colors } from '../data/data';

// ######################## ANIMATIONS

const GlitchAnimationRed = keyframes`
    0% { top: -1.2px; left: -1.2px; }
    10% { top: -1px; left: -1px; }
    20% { top: -1px; left: -1px; }
    30% { top: -1px; left: -1px; }
    40% { top: -1px; left: -1px; }
    42% { top: -1.5px; left: -1.5px; }
    80% { top: -1.5px; left: -1.5px; }
    82% { top: -1px; left: -1px; }
    90% { top: -1px; left: -1px; }
    100% { top: -1px; left: -1px; }
`;

const GlitchAnimationTeal = keyframes`
    0% { top: 1.2px; left: 1.2px; }
    10% { top: 1px; left: 1px; }
    20% { top: 1px; left: 1px; }
    30% { top: 1px; left: 1px; }
    40% { top: 1px; left: 1px; }
    42% { top: 1.5px; left: 1.5px; }
    80% { top: 1.5px; left: 1.5px; }
    82% { top: 1px; left: 1px; }
    90% { top: 1px; left: 1px; }
    100% { top: 1.2px; left: 1.2px; }
`;

// ######################## STYLES

export const PanelContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10%;
    /* margin-left: 80px;
    margin-right: 80px; */
    align-items: center;
    justify-content: center;
    position: relative;
    height: 450px;
    width: 280px;
    padding: 2em;
    cursor: pointer;
    background-color: ${colors.white};
    opacity: 0.85;
    transition: 300ms ease-in-out;
    z-index: 1;

    &:hover {
        transition: 300ms ease-in-out;
        height: 475px;
        opacity: 1;
    }

    &:hover .image-wrapper {
        transition: 300ms ease-in-out;
        background-color: rgb(255, 251, 133, 0.8);
    }
`;

export const PanelImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -8%;
    /* left: -3%; */
    height: 180px;
    width: 180px;
    border-radius: 50%;
    cursor: pointer;
    /* background-color: ${colors.gold}; */
    background-color: rgb(255, 251, 133, 0.4);
    transition: 500ms ease-in-out;
    z-index: 2;
`;

export const PanelImage = styled.img`
    background-size: cover;
    cursor: pointer;
    width: 97%;
    height: 97%;
    border-radius: 50%;
    overflow: hidden;
    z-index: 2;
`;

export const PanelTitle = styled.h4`
    /*  */
    font-family: 'Secular One', sans-serif;
    cursor: pointer;
    color: ${colors.black};
    font-size: 3rem;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    margin: 0;
    margin-top: 6rem;
    position: absolute;
    top: 0;
    z-index: 3;

    &:before, &:after {
        content: attr(data-title);
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        z-index: -1;
    }

    &:before {
        color: ${colors.teal};
        animation-name: ${GlitchAnimationTeal};
        animation-duration: 800ms;
        animation-iteration-count: infinite;
    }

    &:after {
        color: ${colors.red};
        animation-name: ${GlitchAnimationRed};
        animation-duration: 800ms;
        animation-iteration-count: infinite;
    }
`;


export const PanelDescription = styled.p`
    color: ${colors.grey};
    text-align: justify;
    /* position: absolute;*/
    margin-top: 9rem; 
    top: 0;
    z-index: 3;
`;