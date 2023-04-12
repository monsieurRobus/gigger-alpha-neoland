import styled from "styled-components";

export const SeparatorsDiv = styled.div`

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 15rem;

    @media (max-width: 768px) {
        gap: 3rem;
        }

`

export const StyledSeparators = styled.div`

    width: 20vw;
    border: 2px solid var(--color-light);

    @media (max-width: 768px) {
        
    width: 10vw;
    }

`
export const StyledSongDetailPage = styled.main`

  padding-top: 6rem;
    display: flex;
    flex-direction: column;
    height:100%;
    @media (max-width: 768px) {

        padding-top: 0rem;


    }

`
export const StyledSongImg = styled.img`

    width: 300px;
    height: 300px;
    border-radius: 30px;

`

export const StyledHeader = styled.header`

    background-color: var(--color-medium);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    width: 100%;

    height: 50vh;
    @media (max-width: 768px) {
        height: 100%;
        flex-direction: column;
        align-items: center;
        gap:1rem;
    }

    h1,h2,h3{
        color: var(--color-light);
        text-shadow: 1px 1px 2px var(--color-dark);
        margin: 0;
    }

`

export const StyledDetailSongTags = styled.div`

padding: 1rem 0;

`
export const StyledTag = styled.span`

    font-size: 0.8rem;
    padding:0.2rem;
    margin:0.4rem;
    border-radius: 10px;
    color: var(--color-darkest);
    border: 1px solid var(--color-darkest);
    &:hover {
        background-color: var(--color-light);
        color: var(--color-darkest);
    }

    

`

export const StyledLyricsDiv = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    p {width:100%;}

    @media (max-width: 768px) {

        p {
            height: 150vh;
            width:100%;
            
        }
    
    }

`

export const StyledSection = styled.section`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    width: 100%;
    height: inherit;

`