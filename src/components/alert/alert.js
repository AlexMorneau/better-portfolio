import React from 'react';
import xIcon from '../../media/contact/icons/x.svg';

import {
    AlertBackground,
    AlertContainer,
    AlertHeader,
    AlertMessage,
    AlertExit
} from './alert.styles';


const Alert = (props) => {
    return (props.active) ? (
        <AlertBackground>
            <AlertContainer>
                <AlertHeader>message sent</AlertHeader>
                <AlertMessage>Thank you for contacting me! Your message has been sent and I will respond to the email address provided as soon as possible.</AlertMessage>
                <AlertExit 
                    src={xIcon}
                    onClick={() => props.setActive(false)} />
                    { props.children }
            </AlertContainer>
        </AlertBackground>
    )

    :

    ""
}

export default Alert;
