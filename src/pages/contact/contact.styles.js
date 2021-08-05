import styled from 'styled-components';
import { colors } from '../../components/data/data';

// ###################### CONTACT

export const ContactMain = styled.div`
    display: flex;
    justify-content: center;
    padding: 4rem;
`;

export const ContactContainer = styled.div`

`;

export const ContactForm = styled.form`
    display: grid;
    background-color: ${colors.white};
    padding: 1.5rem 2rem 1.5rem 2rem;
`;

export const ContactRow = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    width: 350px;
    padding-top: 0.5rem;
`;

export const ContactHeader = styled.span`
    text-decoration: none;
    text-transform: uppercase;
    font-size: 2rem;
    font-family: 'Secular One', sans-serif;
    color: ${colors.grey};
    border-bottom: 1px solid ${colors.grey};
`;

export const ContactLabel = styled.h1`
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    font-size: 1rem;
    color: ${colors.grey};
`;

export const ContactInput = styled.input`
    padding: 0.4rem;
    border: none;
    border: 1px solid ${colors.teal};
    border-radius: 10px;
`;

export const ContactTextArea = styled.textarea`
    height: auto;
    width: auto;
    resize: none;
    padding: 0.5rem;
    border: 1px solid ${colors.teal};
    border-radius: 10px;
`;

export const ContactSubmit = styled.input`
    width: 50%;
    height: 2rem;
    margin-top: 1rem;
    transition: 300ms ease-in-out;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
`;