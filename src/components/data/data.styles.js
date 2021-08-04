import styled from 'styled-components';


export const StyledLink = styled.a.attrs({
    target: "_blank"
})`
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

export const StyledMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const StyledSubcontainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const StyledIcon = styled.img`
    cursor: default;
    max-height: 33px;
    width: auto;
    margin-right: 0.3rem;
    margin-left: 0.3rem;
`;

export const StyledSubheader = styled.h1`
    cursor: default;
    font-size: 1rem;
    text-decoration: none;
    border-bottom: 1px solid grey;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    margin-top: 1rem;
`;

export const PtfIconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
    width: 300px;
`;