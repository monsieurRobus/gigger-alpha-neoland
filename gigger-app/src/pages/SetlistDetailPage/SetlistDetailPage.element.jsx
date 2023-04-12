import styled from 'styled-components'


export const StyledMain = styled.main`

    display: flex;
    flex-direction: column;    
    justify-content: center;
    align-items: center;
    padding-top: 8rem;
    padding-bottom: 8rem;
    flex-wrap:nowrap;
    @media (max-width: 768px) {
        
       padding-top: 1rem;
    }

`


export const StyledHeader = styled.header`

    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    gap: 3rem;
    width: 70%;
    height: 300px;
    background-color: var(--color-medium);
    border-radius: 10px;

    h1,h2,h3{
        color: var(--color-light);
        text-shadow: 1px 1px 2px var(--color-dark);
        margin: 0;
    }

    @media (max-width: 768px) {

        width: 90%;
    }

`

export const StyleSetlistSongsDiv = styled.div`

    width:100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
    padding-bottom: 5rem;
    justify-content: center;
    align-items: center;


`