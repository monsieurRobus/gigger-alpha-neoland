import styled from "styled-components"

export const StyledSetlistComponent = styled.article`
width:90vw;
max-width: 300px;
height: 300px;
background-color: var(--color-medium);
border-radius: 2%;
cursor:pointer;
box-shadow: rgba(17, 17, 26, 0.5) 0px 8px 24px, rgba(17, 17, 26, 0.5) 0px 16px 56px, rgba(17, 17, 26, 0.5) 0px 24px 80px;
position:relative;


&:hover {
    
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;

}
    header {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width:100%;

        h1,h2,h3,h4,h5,h6 {
            margin: 0;
            color: var(--color-dark);
            text-shadow: 1px 1px 3px var(--color-light);
        }
        

    }

    footer {

        border-bottom-left-radius: 10%;
        border-bottom-right-radius: 10%;
        background-color: var(--color-light-translucent);
        position:absolute;
        display:flex;
        width:100%;
        justify-content: space-around;
        align-items: center;    
        bottom:0;
        
        h4 {
        font-size:0.6vw;
        text-transform:capitalize;
        color: var(--color-dark);
        }

        h3 {
        font-size:0.8vw;
        }

        h3,h4 {
        text-shadow: 1px 1px 3px var(--color-dark);
        }

        p {
        font-weight: bold;
        color:var(--color-dark);
        }

    }

`

export const StyledHeaderTitle = styled.div`

display: flex;
flex-direction: row;
justify-content: center;
width:100%;

h1 {
    text-align: center;
    font-size: 2rem;
    text-shadow: 2px 2px 4px var(--color-darkest);
}


`


export const StyledHeaderSubtitle = styled.main`


            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
            align-content: center;
        

`

export const ImgSmall = styled.img`

    width: 16.666676%;

`