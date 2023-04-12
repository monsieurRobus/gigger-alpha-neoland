import React from 'react'
import { FaMusic, FaList,FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'





const ButtonMenu = ({handleClick,menu,addSongMenu,addSetlistMenu, goBack}) => {
    const navigate = useNavigate()
    const handleMenu = (e) => {

        e.target.classList.toggle('opened')
        handleClick()
    }

    const handleGoBack = () => {

        navigate(-1)

    }

  return (
    <>
    {menu && <StyledButtonMenu  onClick={handleMenu} className={'menu'}>
        <svg id={'button-menu'} width="50" height="50" viewBox="0 0 100 100">
            <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
            <path className="line line2" d="M 20,50 H 80" />
            <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
        </svg>

        
    </StyledButtonMenu>}
    {addSongMenu && <StyledButtonAddSong onClick={handleClick}><FaMusic/></StyledButtonAddSong>}
    {addSetlistMenu && <StyledButtonAddSetlist onClick={handleClick}><FaList /></StyledButtonAddSetlist>}
    {goBack && <StyledButtonGoBack onClick={handleGoBack}><FaArrowLeft /></StyledButtonGoBack>}
    </>
  )
}


const StyledButtonAddSetlist = styled.button`

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


const StyledButtonGoBack = styled(StyledButtonAddSetlist)`

    background-color: var(--color-medium);

`

const StyledButtonAddSong = styled.button`
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


const StyledButtonMenu = styled.button`

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


export default ButtonMenu