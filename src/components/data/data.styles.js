import styled from 'styled-components';


export const StyledLink = styled.a`
    cursor: pointer;
    text-decoration: none;
    color: rgb(43, 43, 43);
    border-bottom: 1px solid rgb(43, 43, 43, 0.3);
    background: rgb(255, 251, 133 0.2);
    transition: 300ms ease-in-out;

    &:hover {
        transition: 600ms ease-in-out;
        border-bottom: 1px solid rgb(43, 43, 43);
        background: rgb(255, 251, 133);
    }

`;