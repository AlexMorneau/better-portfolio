import styled from 'styled-components';
import { colors } from '../../components/data/data';


export const ContactMain = styled.div`
    display: flex;
    justify-content: center;
    background: ${colors.white};
    padding: 4rem;
`;

// this

export const ContactContainer = styled.div`
    display: grid;
`;

export const ContactForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: red;
`;

export const ContactRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 7rem;
    /* background: ${colors.gold}; */
    width: 500px;
    border: 1px solid ${colors.grey};
`;

export const ContactInput = styled.input`
    padding: 1rem;
    border: none;
`;

export const ContactTextArea = styled.textarea`
    resize: none;
`;


// ########################### SUBMIT BUTTON

export const ButtonSubmit = styled.a`
    cursor: pointer;
    font-size: 0.9rem;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.1rem;
    max-width: 160px;
    width: 100%;
    position: relative;
    line-height: 45px;
    margin: 20px 0 10px;
    color: ${colors.black};

    &:hover {
        letter-spacing: 0.14rem;
        transition: all 350ms linear;

        rect {
            stroke-width: 4;
            stroke-dasharray: 15, 310;
            stroke-dashoffset: 48;
            transition: all 1350ms cubic-bezier(0.19, 1, 0.22, 1);
        }
    }
`;

export const ButtonSVG = styled.svg`
    height: 45px;
    left: 0;
    top: 0;
    position: absolute;
    width: 100%;
`;


export const ButtonRect = styled.rect`
    fill: none;
    stroke: ${colors.black};
    stroke: rgb(0, 0, 0);
    stroke-width: 2;
    stroke-dasharray: 422, 0;
    transition: all 350ms linear;
`;