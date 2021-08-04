import styled from "styled-components";
import { colors } from '../data/data';

export const ScrollIcon = styled.img`
    position: relative;
    margin-top: 0.5rem;
    max-width: 50px;
    transition: 300ms ease-in-out;
`;

export const ScrollContainer = styled.div`
    position: fixed;
    text-align: center;
    cursor: pointer;
    bottom: 5%;
    right: 5%;
    height: 4rem;
    width: 4rem;
    background: ${colors.white};
    z-index: 3;
    transition: 300ms ease-in-out;

    &:hover {
        background: ${colors.red};
    }

    &:hover ${ScrollIcon} {
        transform: translateY(-0.3rem);
        transition: 300ms ease-in-out;
    }
`;


