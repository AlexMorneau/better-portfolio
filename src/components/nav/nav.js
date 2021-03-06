import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    NavMain,
    NavContainer,
    NavItem,
    MobileIconWrapper,
    MobileIcon
} from './nav.styles';

// Imported to Appjs to be applied to all pages

const Nav = ({ activeToggle }) => {
    return (
            <NavMain>
                <MobileIconWrapper
                    onClick={activeToggle}>
                    <MobileIcon />
                </MobileIconWrapper>

                <NavContainer>
                    <NavLink exact to="/about">
                        <NavItem>About</NavItem>
                    </NavLink>
                    <NavLink to="/portfolio">
                        <NavItem>Portfolio</NavItem>
                    </NavLink>
                    <NavLink to="/contact">
                        <NavItem>Contact</NavItem>
                    </NavLink>
                </NavContainer>
            </NavMain>
    )
}

export default Nav;
