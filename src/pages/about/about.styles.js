import styled from 'styled-components';

export const AboutMain = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-column-gap: 5rem;
    justify-content: center;

    @media (max-width: 1200px) {
        grid-auto-flow: row;
        grid-row-gap: 1rem;
        margin-bottom: 10rem;
    }

`;