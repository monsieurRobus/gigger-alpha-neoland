import styled from 'styled-components'


export const StyledMain = styled.main`

    display: flex;
    justify-content: center;
    height: 70vh;
    padding-top: 15vh;

`


export const StyledHeader = styled.header`

    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    gap: 3rem;
    width: 50%;
    height: 30%;
    background-color: var(--color-medium);
    border-radius: 10px;

    h1,h2,h3{
        color: var(--color-light);
        text-shadow: 1px 1px 2px var(--color-dark);
        margin: 0;
    }

`