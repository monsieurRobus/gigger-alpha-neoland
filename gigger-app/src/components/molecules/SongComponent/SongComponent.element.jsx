import styled from "styled-components";

export const StyledSongComponent = styled.article`
    
    cursor: pointer;
    width:90vw;
    max-width: 300px;
    height: 300px;
    background: var(--color-medium);
    border-radius: 2%;
    position:relative;
    transition: box-shadow 0.5s ease-in-out;
    box-shadow: rgba(17, 17, 26, 0.5) 0px 8px 24px, rgba(17, 17, 26, 0.5) 0px 16px 56px, rgba(17, 17, 26, 0.5) 0px 24px 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    

    img {
        z-index: 1;
        opacity: 0.8;
        max-width: 300px;
        height:300px;
        border-top-left-radius: 2%;
        border-top-right-radius: 2%;
        border-bottom-left-radius: 2%;
        border-bottom-right-radius: 2%;
    }

    button {
        z-index: 999;
    }

    header {
        position:relative;
        width:100%;    
        display:flex;
        flex-direction: row;

    

    }

    footer {
        z-index:999;
        background-color: var(--color-light-translucent);
        position:absolute;
        display:flex;
        width:100%;
        gap:1rem;
        justify-content: space-around;
        align-items: center;   
        height:30%; 
        bottom:0;
        border-bottom-left-radius: 2%;
        border-bottom-right-radius: 2%;
        
        h4 {
        font-size:0.8rem;
        text-transform:capitalize;
        margin:0;
        color: var(--color-dark);
        }

        h3 {
        font-size:1vw;        
        margin:0;
        }

        h3,h4 {
        text-shadow: 1px 1px 2px var(--color-dark);
        }

        p {
        font-weight: bold;
        color:var(--color-dark);
        }

        @media (max-width: 768px){
            h3{
                font-size: 1.5rem;
            }
        }

    }

    .position {
        margin:0.5rem;
        position:absolute;
        right:0;
    }



    &:hover {
    
        box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    
    }
    
    @media (max-width: 768px) {

        max-width:90%;

    }

`


export const StyledTagsContainerDiv = styled.div`
    z-index: 99;
    position:absolute;
    display: flex;
    flex-direction: row;
    justify-content: flex-start; 
    align-items: center;
    width:50%;
    flex-wrap: wrap;

`

export const StyledTag = styled.span`

    font-size: 0.56rem;
    padding:0.2rem;
    margin:0.4rem;
    border-radius: 10px;
    color: var(--color-darkest);

    &:hover {
        background-color: var(--color-light);
        color: var(--color-darkest);
    }

    

`