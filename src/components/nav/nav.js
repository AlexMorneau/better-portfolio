import React from 'react';
import { 
    BrowserRouter as Router,
    Link
 } from 'react-router-dom';
import {
    NavMain,
    NavContainer,
    NavItem
} from './nav.styles';

// Imported to Appjs to be applied to all pages

const Nav = () => {
    return (
        <Router>
            <NavMain>
                <NavContainer>
                    <Link to="/">
                        <NavItem>About</NavItem>
                    </Link>
                    <Link to="/portfolio">
                        <NavItem>Portfolio</NavItem>
                    </Link>
                    <Link to="/contact">
                        <NavItem>Contact</NavItem>
                    </Link>
                </NavContainer>
            </NavMain>
        </Router>
    )
}

export default Nav;
