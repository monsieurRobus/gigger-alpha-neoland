import React, { useState,  } from 'react'
import styled from 'styled-components'
import { getImageHeader } from '../../../services/songs'
import StyledButton from '../../../ui/StyledButton/StyledButton'
import placeholder from '/gigger-placeholder.png'

const SongComponent = ({onFavClick,datafav,songData}) => {
  const bandName = songData.band
  const songName = songData.name 

  const time = (duration) => {
    const minutes = Math.floor(duration/60)
    const seconds = duration-60*Math.floor(duration/60)
    return `${minutes}:${seconds<10 ? '0':''}${seconds}`
  }

  const [imgUrl,setImgUrl] = useState(null)

  
  return (
    <StyledSongComponent>
      <header>
        <StyledButton id={songData.id} onClick={onFavClick} className='position' data-fav={datafav} like>{datafav?'💓':'🖤'}</StyledButton>
      </header>
      <img src={imgUrl || placeholder} />
      <footer>
        <div>
          <h3>{bandName}</h3>
          <h4>{songName}</h4>
        </div>        
        <div>
        <p>{time(songData.duration)}</p>
        </div>
        
      </footer>
    </StyledSongComponent>
  )
}

const StyledSongComponent = styled.article`
  
  width:90vw;
  max-width: 300px;
  height: 300px;
  background: var(--color-medium);
  border-radius: 2%;
  position:relative;
  box-shadow: rgba(17, 17, 26, 0.5) 0px 8px 24px, rgba(17, 17, 26, 0.5) 0px 16px 56px, rgba(17, 17, 26, 0.5) 0px 24px 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  

  img {
    z-index: 1;
    opacity: 0.8;
    width: 100%;
    max-width: 300px;
    border-top-left-radius: 2%;
    border-top-right-radius: 2%;
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

  .position {
    margin:0.5rem;
    position:absolute;
    right:0;
  }

  transition: all 0.5s ease-in-out;
  &:hover {
  
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  
  }
  
  @media (max-width: 768px) {

    max-width:90%;

  }

`

export default SongComponent