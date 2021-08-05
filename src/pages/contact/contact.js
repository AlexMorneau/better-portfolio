import React from 'react';
import Nav from '../../components/nav/nav';
import Background from '../../components/background/background';
import emailjs from 'emailjs-com';

// emailJS: https://www.emailjs.com/docs/examples/reactjs/
// format: name | email | message

import {
    ContactMain,
    ContactContainer,
    ContactForm,
    ContactRow,
    ContactInput,
    ContactTextArea,
    ButtonSubmit,
    ButtonSVG,
    ButtonRect
} from './contact.styles';

const Contact = () => {

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
        e.target.reset();
    }


    return (
        <div>
            <Nav />
            <Background />
            
            <ContactMain>
                <ContactContainer>
                    <ContactForm onSubmit={sendEmail}>
                        <ContactRow
                            className="form-group">
                            <ContactInput
                                id="name"
                                className="form-control"
                                type="text"
                                placeholder="Full Name"
                                name="name" />
                        </ContactRow>
                        <ContactRow
                            className="form-group">
                            <ContactInput
                                className="form-control"
                                type="text"
                                placeholder="Eg. example@email.com"
                                name="email" />
                        </ContactRow>
                        <ContactRow
                            className="form-group">
                            <ContactInput
                                className="form-control"
                                type="text"
                                placeholder="Subject"
                                name="subject" />
                        </ContactRow>
                        <ContactRow>
                            <ContactTextArea
                                className="form-control"
                                placeholder="Your Message"
                                name="message" />
                        </ContactRow>
                        <ContactRow>
                            <input type="submit" value="send email"></input>
                        </ContactRow>
                    </ContactForm>
                </ContactContainer>
            </ContactMain>
            
        </div>
    )
}

export default Contact;
