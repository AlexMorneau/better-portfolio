import styled from 'styled-components';
import { colors } from '../data/data';

export const NavMain = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    margin-bottom: 30px;
    z-index: 3;
`;

export const NavContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
`;

export const NavItem = styled.div`
    display: inline-block;
    cursor: pointer;
    position: relative;
    text-decoration: none;
    font-size: 18px;
    padding: 5px 15px 5px 15px;
    color: ${colors.white};
    opacity: 0.7;
    transition: 300ms ease-in-out;
    text-transform: uppercase;
    letter-spacing: 0.1rem;

    &:hover {
        opacity: 1;
        letter-spacing: 0.13rem;
        transition: 300ms ease-in-out;
    }

    &:after {
        content: '';
        position: absolute;
        left: 0;
        display: inline-block;
        height: 1em;
        width: 100%;
        border-bottom: 0.1rem solid ${colors.teal};
        margin-top: 10px;
        opacity: 0;
        -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
        transition: opacity 0.35s, transform 0.35s;
        -webkit-transform: scale(0,1);
        transform: scale(0,1);
    }

    &:hover::after {
        opacity: 1;
	    -webkit-transform: scale(1);
	    transform: scale(1);
    }
`;
