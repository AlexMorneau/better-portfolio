import styled from 'styled-components';
import { colors } from '../data/data';

export const AlertBackground = styled.div`
position: fixed;
display: flex;
justify-content: center;
align-items: center;
top: 0;
height: 100%;
width: 100%;
background: rgb(43, 43, 43, 0.7);
z-index: 4;
`;

export const AlertContainer = styled.div`
position: relative;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
padding: 1rem;
height: 15rem;
width: 18rem;
background: ${colors.black};
`;

export const AlertHeader = styled.h1`
font-family: 'Secular One', sans-serif;
text-decoration: none;
text-transform: uppercase;
cursor: default;
color: ${colors.white};
border-bottom: 1px solid ${colors.gold};
`;

export const AlertMessage = styled.div`
cursor: default;
color: ${colors.white};
text-align: center;
margin-top: 0.5rem;
`;

export const AlertExit = styled.img`
cursor: pointer;
width: 3rem;
height: auto;
margin-top: 1rem;
transition: 200ms ease-in-out;

&:hover {
    transform: translateY(0.2rem);
}
`;