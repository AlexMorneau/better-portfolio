import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { colors } from '../data/data';
import { GrClose } from "react-icons/gr";

export const MobileNavContainer = styled.div`
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    position: fixed;
    width: 100%;
    height: 100%;
    background: ${colors.black};
    transition: 300ms ease-in-out;
    opacity: ${({ isActive }) => (isActive ? '1' : '0')};
    top: ${({ isActive }) => (isActive ? '0' : '-100%')};
`;

export const IconWrapper = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    cursor: pointer;
`;

export const IconClose = styled(GrClose)`
    color: ${colors.white};
`;

export const MobileNavWrapper = styled.div`
    color: red;
`;

export const MobileNavMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;
`;

export const MobileNavLink = styled(NavLink)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${colors.white};
    font-size: 1rem;
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;
    transition: 300ms ease-in-out;

    &:hover {
        color: ${colors.gold};
        transition: 300ms ease-in-out;
    }
`;