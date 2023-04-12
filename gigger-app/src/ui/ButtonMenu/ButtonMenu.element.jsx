import styled from "styled-components";

export const StyledButtonAddSetlist = styled.button`

    width:50px;
    height:50px;
    display:flex;
    font-size:1.2rem;
    justify-content:center;
    align-items:center;
    
    cursor: pointer;
    border-radius: 50%;
    box-shadow: 0 0 0;
    color: var(--color-darkest);
    background-color: var(--color-secondary);
    border:0;
    position:fixed;
    right:2vw;
    bottom:9vh;
    z-index:9995;

`


export const StyledButtonGoBack = styled(StyledButtonAddSetlist)`

    background-color: var(--color-medium);

`

export const StyledButtonAddSong = styled.button`
    width:50px;
    height:50px;
    display:flex;
    font-size:1.2rem;
    justify-content:center;
    align-items:center;
    
    cursor: pointer;
    border-radius: 50%;
    box-shadow: 0 0 0;
    color: var(--color-darkest);
    background-color: var(--color-primary);
    border:0;
    position:fixed;
    right:2vw;
    bottom:2vh;
    z-index:9995;
`


export const StyledButtonMenu = styled.button`

    display:none;
    width:50px;
    height:50px;
    border-radius: 50%;
    box-shadow: 0 0 0;
    background-color: var(--color-primary);
    border:0;

    .menu {
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    padding: 0;
    }
    .line {
    fill: none;
    stroke: black;
    stroke-width: 6;
    transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
        stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
    }
    .line1 {
    stroke-dasharray: 60 207;
    stroke-width: 6;
    }
    .line2 {
    stroke-dasharray: 60 60;
    stroke-width: 6;
    }
    .line3 {
    stroke-dasharray: 60 207;
    stroke-width: 6;
    }
    .opened .line1 {
    stroke-dasharray: 90 207;
    stroke-dashoffset: -134;
    stroke-width: 6;
    }
    .opened .line2 {
    stroke-dasharray: 1 60;
    stroke-dashoffset: -30;
    stroke-width: 6;
    }
    .opened .line3 {
    stroke-dasharray: 90 207;
    stroke-dashoffset: -134;
    stroke-width: 6;
    }


    @media (max-width: 768px) {
        z-index: 99999999;
        display:flex;
        position:fixed;
        top:20px;
        left:20px;

    }

`