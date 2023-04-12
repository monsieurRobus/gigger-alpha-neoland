import styled from "styled-components"

export const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    margin:0;
    gap:2rem;
    background-color: var(--color-darkest);
    height: 15vh;

    span { padding: 1rem;}

`

export const StyledFooterDiv = styled.div`

    

`

export const StyledFooterDiv2 = styled(StyledFooterDiv)`
    display: flex;
    font-size: 1.5rem;
    gap: 2rem;
    color: var(--color-light);
    

    a { 
        transition: color 0.5s ease-in-out;
        color: var(--color-light);
    }

    a:hover {
    
        color: var(--color-primary);
    
    }
`

export const StyledGiggerLogoFooter = styled.span`

    color: var(--color-primary);
    
`