import React from 'react';

import {
    MobileNavContainer,
    IconWrapper,
    IconClose,
    MobileNavMenu,
    MobileNavLink
} from './mobile-nav.styles';

const MobileNav = ({ activeToggle, isActive }) => {
    return (
        <MobileNavContainer 
            onClick={activeToggle} 
            isActive={isActive}>
            <IconWrapper>
                <IconClose
                    style={{color: 'red'}} />
            </IconWrapper>

                <MobileNavMenu>
                    <MobileNavLink 
                        to='/about'
                        onClick={activeToggle}>about</MobileNavLink>
                    <MobileNavLink 
                        to='/portfolio'
                        onClick={activeToggle}>portfolio</MobileNavLink>
                    <MobileNavLink 
                        to='/contact'
                        onClick={activeToggle}>contact</MobileNavLink>
                </MobileNavMenu>
        </MobileNavContainer>
    )
}

export default MobileNav;
