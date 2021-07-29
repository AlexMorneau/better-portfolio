import React from 'react';
import {
    ButtonNavLink,
    ButtonSVG,
    ButtonRect
} from './button-custom.styles';

const ButtonCustom = ({ buttonText, buttonLink }) => {
    return (
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

    )
}

export default ButtonCustom;
