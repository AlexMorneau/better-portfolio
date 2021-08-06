import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { colors } from '../data/data';
import { BiX } from "react-icons/bi";

export const MobileNavContainer = styled.div`
    display: block;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    width: 100%;
    height: 100%;
    background: ${colors.black};
    z-index: 6;
    transition: 300ms ease-in-out;
    opacity: ${({ isActive }) => (isActive ? '1' : '0')};
    top: ${({ isActive }) => (isActive ? '0' : '-100%')};
`;

export const IconWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    margin: 3rem;
    cursor: pointer;
`;

export const IconClose = styled(BiX)`
    font-size: 3rem;
`;

export const MobileNavMenu = styled.div`
    display: grid;
    width: 100%;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 3rem;
    text-align: center;
`;

export const MobileNavLink = styled(NavLink)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${colors.white};
    font-size: 1.5rem;
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;
    transition: 300ms ease-in-out;

    &:hover {
        color: ${colors.teal};
        transition: 300ms ease-in-out;
    }
`;