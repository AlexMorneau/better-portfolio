import styled from 'styled-components';

export const NavMain = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    margin-bottom: 30px;
`;

export const NavContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
`;

export const NavItem = styled.div`
    display: inline-block;
    cursor: pointer;
    position: relative;
    text-decoration: none;
    font-size: 18px;
    padding: 5px 15px 5px 15px;
    color: rgb(40, 40, 40);
    opacity: 0.7;
    transition: 300ms ease-in-out;
    text-transform: uppercase;

    &:hover {
        opacity: 1;
        transition: 300ms ease-in-out;
    }

    &:before {
        height: 5px;
        width: 0%;
        bottom: 1px;
        content: "";
        position: absolute;
        background-color: rgba(6, 64, 170, 0.356);
        transition: 300ms;
        opacity: 0;
    }

    &:hover::before {
        width: 70%;
        opacity: 1;
    }
`;
