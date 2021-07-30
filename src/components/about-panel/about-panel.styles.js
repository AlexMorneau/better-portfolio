import styled from 'styled-components';
import { colors } from '../data/data';


export const PanelContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5%;
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
    transition: 500ms ease-in-out;
    z-index: 1;

    &:hover {
        transition: 500ms ease-in-out;
        height: 470px;
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
    z-index: 3;
`;

export const PanelDescription = styled.p`
    /*  */
    color: ${colors.grey};
    text-align: justify;
    z-index: 3;
`;