import styled from 'styled-components';

export const AboutMain = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-column-gap: 5%;
    justify-content: center;

    @media (max-width: 960px) {
        grid-auto-flow: row;
        grid-row-gap: 5%;
    }

`;