import styled from 'styled-components';

export const NavMain = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
`;

export const NavContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const NavItem = styled.div`
    display: inline-block;
    cursor: pointer;
    position: relative;
    text-decoration: none;
    font-size: 32px;
    border: 0;
    padding: 5px 20px 5px 5px;
    opacity: 0.7;
    transition: 300ms ease-in-out;

    &:hover {
        opacity: 1;
        transition: 300ms ease-in-out;
    }

    &:before {
        height: 18px;
        width: 0%;
        bottom: 12px;
        content: "";
        position: absolute;
        background-color: rgba(6, 64, 170, 0.356);
        transition: 300ms;
        opacity: 0;
    }

    &:hover::before {
        width: 75%;
        opacity: 1;
    }
`;
