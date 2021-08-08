import React, { useState, useEffect } from 'react';

import Alert from '../../components/alert/alert';

import emailjs from 'emailjs-com';
import ReactTooltip from 'react-tooltip';

import iconGithub from '../../media/contact/icons/github.svg';
import iconLinkedin from '../../media/contact/icons/linkedin.svg';
import iconGmail from '../../media/contact/icons/outlook.svg';

import { links } from '../../components/data/data';

// emailJS: https://www.emailjs.com/docs/examples/reactjs/

import {
    ContactMain,
    ContactContainer,
    ContactForm,
    ContactRow,
    ContactHeader,
    ContactLabel,
    ContactInput,
    ContactTextArea,
    ContactSubmit,
    ContactAltHeader,
    ContactAltIcons,
    ContactAltIcon,
    ContactAltText
} from './contact.styles';

const Contact = () => {
    const [alert, setAlert] = useState(false);

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(
            process.env.REACT_APP_SERVICE_ID, 
            process.env.REACT_APP_TEMPLATE_ID, 
            e.target, 
            process.env.REACT_APP_USER_ID)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        console.log(process.env.REACT_APP_SERVICE_ID);
        e.target.reset();
        setAlert(true);
    }

    useEffect(() => {
        document.title = "Alex Morneau | Contact"
      }, []);

    return (
        <div>
            <ContactMain>
                <ContactContainer>
                    <ContactForm onSubmit={sendEmail}>
                        <ContactRow>
                            <ContactHeader>Send a Message</ContactHeader>
                        </ContactRow>
                        <ContactRow className="form-group">
                            <ContactLabel>name</ContactLabel>
                            <ContactInput
                                id="name"
                                className="form-control"
                                type="text"
                                placeholder="Full Name"
                                name="name" />
                        </ContactRow>
                        <ContactRow className="form-group">
                            <ContactLabel>email</ContactLabel>
                            <ContactInput
                                className="form-control"
                                type="text"
                                placeholder="Eg. example@email.com"
                                name="email" />
                        </ContactRow>
                        <ContactRow className="form-group">
                            <ContactLabel>subject</ContactLabel>
                            <ContactInput
                                className="form-control"
                                type="text"
                                placeholder="Subject"
                                name="subject" />
                        </ContactRow>
                        <ContactRow className="form-group">
                            <ContactLabel>message</ContactLabel>
                            <ContactTextArea
                                className="form-control"
                                placeholder="Your Message"
                                rows="4"
                                name="message" />
                        </ContactRow>
                        <ContactRow>
                            <ContactSubmit 
                                type="submit"
                                value="send" />
                        </ContactRow>
                        <ContactRow>
                            <ContactAltHeader>Alternatively :</ContactAltHeader>
                            <ContactAltIcons>
                                <a 
                                    href="mailto:alex@alexmorneau.ca"
                                    data-tip="Send me an email: alex@alexmorneau.ca">
                                    <ContactAltIcon 
                                        src={iconGmail} 
                                        alt="email" />
                                </a>
                                <a 
                                    href={links.linkedin}
                                    target="_blank"
                                    rel="noreferrer"
                                    data-tip="Connect with me on LinkedIn">
                                    <ContactAltIcon 
                                        src={iconLinkedin} 
                                        alt="linkedin" />
                                </a>
                                <a
                                    href={links.github} 
                                    target="_blank"
                                    rel="noreferrer"
                                    data-tip="Find me on Github">
                                    <ContactAltIcon 
                                        src={iconGithub} 
                                        alt="github" />
                                </a>
                                <ReactTooltip />

                                <ContactAltText>
                                    <i>Email me at:</i> <br />
                                    <b>alex@alexmorneau.ca</b>
                                </ContactAltText>
                            </ContactAltIcons>
                        </ContactRow>
                    </ContactForm>
                </ContactContainer>
            </ContactMain>

            <Alert
                active={alert}
                setActive={setAlert} />
            
        </div>
    )
}

export default Contact;
