import React from 'react';
import {
    ButtonExternalLink,
    ButtonNavLink,
    ButtonSVG,
    ButtonRect
} from './button-custom.styles';

// buttonExternal may be true or false
// true means the link will be to an external website and open in a new tab
// false means the link is a page on the website

const ButtonCustom = ({ buttonText, buttonLink, buttonExternal }) => {
    return (
        <>
        {buttonExternal === true ?
            <ButtonExternalLink href={buttonLink} target="_blank">
                <ButtonSVG>
                    <ButtonRect
                        x="0"
                        y="0"
                        fill="none"
                        width="100%"
                        height="100%" />
                </ButtonSVG>
                {buttonText}
            </ButtonExternalLink>
            
            :

            <ButtonNavLink to={buttonLink}>
                <ButtonSVG>
                    <ButtonRect
                        x="0"
                        y="0"
                        fill="none"
                        width="100%"
                        height="100%" />
                </ButtonSVG>
                {buttonText}
            </ButtonNavLink>
        }
        </>

    )
}

export default ButtonCustom;
