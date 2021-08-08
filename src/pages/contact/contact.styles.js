import styled from 'styled-components';
import { colors } from '../../components/data/data';

export const ContactMain = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
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

export const ContactAltHeader = styled.h1`
    border-top: 1px solid ${colors.grey};
    color: ${colors.grey};
    text-decoration: none;
    text-transform: uppercase;
    padding-top: 1rem;
    font-size: 1rem;
    letter-spacing: 0.2rem;
`;


export const ContactAltIcons = styled.div`
    height: 2rem;
    width: 100%;
    margin-top: 0.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const ContactAltIcon = styled.img`
    cursor: pointer;
    height: 2rem;
    width: auto;
    padding-right: 1rem;
`;

export const ContactAltText = styled.div`
    cursor: default;
    margin-left: 2rem;
    font-size: 1rem;
    text-decoration: none;
    text-transform: lowercase;
    text-align: right;
    transform: translate(1rem, -0.3rem);
    color: ${colors.lightGrey};
    padding: 1rem;
`;