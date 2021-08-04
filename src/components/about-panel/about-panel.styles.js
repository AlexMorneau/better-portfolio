import styled from 'styled-components';
import { colors } from '../data/data';

export const PanelContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20%;
    /* margin-left: 80px;
    margin-right: 80px; */
    align-items: center;
    justify-content: space-evenly;
    position: relative;
    height: 450px;
    width: 280px;
    padding: 2em;
    cursor: default;
    /* background-color: ${colors.white}; */
    background: linear-gradient(0deg, white 68%, rgba(0,0,0, 0) 32%);
    opacity: 0.85;
    transition: 200ms ease-in-out;
    z-index: 1;

    &:hover {
        transition: 100ms ease-in-out;
        height: 460px;
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
    height: 180px;
    width: 180px;
    border-radius: 50%;
    cursor: default;
    background-color: ${colors.teal};
    transition: 500ms ease-in-out;
    z-index: 2;
`;

export const PanelImage = styled.img`
    background-size: cover;
    cursor: default;
    width: 95%;
    height: 95%;
    border-radius: 50%;
    overflow: hidden;
    z-index: 2;
`;

export const PanelTitle = styled.h4`
    font-family: 'Secular One', sans-serif;
    letter-spacing: 0.1rem;
    cursor: default;
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
    }
    
    &:before {
        color: ${colors.red};
        top: 2px;
        left: 2px;
        z-index: -1;
    }
    
    &:after {
        color: ${colors.teal};
        top: 4px;
        left: 4px;
        z-index: -2;
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