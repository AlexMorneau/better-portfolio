import styled from 'styled-components';
import { colors } from '../data/data';

export const PtfPanelContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    align-items: center;
    justify-content: flex-start;
    cursor: default;
    position: relative;
    min-height: 600px;
    height: 600px;
    max-width: 400px;
    width: 400px;
    background-color: ${colors.white};
    transition: 300ms ease-in-out;
    overflow: hidden;
    z-index: 1;

    &:hover {
        background-color: white;
    }
`;

export const PtfImageWrapper = styled.div`
    display: flex;
    cursor: pointer;
    /* align-items: center; */
    justify-content: center;
    height: 200px;
    width: 100%;
    position: absolute;
    overflow: hidden;
    object-fit: cover;
    top: 0;
    z-index: 3;
`;

export const PftImageOverlay = styled.div`
    position: absolute;
    cursor: pointer;
    height: 100%;
    width: 100%;
    background: ${colors.grey};
    opacity: 0.4;
    transition: 300ms ease-in-out;
    z-index: 2;

    &:hover {
        opacity: 0;
    }
`;

export const PftOverlayText = styled.div`
    position: absolute;
    top: 5%;
    right: 5%;
    color: ${colors.teal};
    text-decoration: none;
    transition: 300ms ease-in-out;
    font-size: 3rem;
    z-index: 3;
`;


export const PtfImage = styled.img`
    background-size: cover;
    cursor: pointer;
    z-index: 1;
`;

export const PtfPanelHeader = styled.div`
    position: absolute;
    margin-top: 13rem;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 2rem;
    /* letter-spacing: 0.5rem; */
    font-family: 'Secular One', sans-serif;
    color: ${colors.grey};
    border-bottom: 1px solid ${colors.grey};
    transition: 300ms ease-in-out;
    z-index: 3;
`;

export const PtfPanelDescription = styled.p`
    color: ${colors.grey};
    text-align: justify;
    margin-top: 18rem;
    margin-left: 2rem;
    margin-right: 2rem;
`;

export const PtfIconWrapper = styled.p`
    /*  */
`;