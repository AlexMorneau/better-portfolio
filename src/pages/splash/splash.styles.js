import styled from 'styled-components';
import { colors } from '../../components/data/data';

export const SplashMain = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100%;
    height: 720px;
    width: 100%;
`;

export const SplashContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px;
    position: absolute;
    background-color: ${colors.white};
    opacity: 0.85;
    box-shadow: 5px 5px 10px rgb(0, 0, 0, 0.2);
    transition: 300ms ease-in-out;
    z-index: 2;

    &:hover {
        background-color: ${colors.white};
        opacity: 1;
        transition: 300ms ease-in-out;
    }
`;

export const SplashTopText = styled.div`
    cursor: default;
    font-size: 0.8rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
`;

export const SplashImage = styled.img`
    width: 150px;
    height: auto;
    margin: 15px 0 15px 0;
    border-radius: 50%;
    border: 2px solid ${colors.gold};
`;

export const SplashHeader = styled.div`
    text-decoration: none;
    text-transform: uppercase;
    cursor: default;
    font-size: 1.4rem;
    word-spacing: 0.2rem;
    letter-spacing: 0.2rem;
    font-weight: bold;
`;

export const SplashSubheader = styled.div`
    cursor: default;
    font-size: 0.9rem;
    word-spacing: 0.2rem;
    text-transform: uppercase;
    margin: 0 0 15px 0;
`;

export const SplashDescription = styled.div`
    cursor: default;
    font-size: 0.9rem;
    font-style: italic;
    text-align: center;
    color: ${colors.grey};
    width: 14rem;
`;