import React, { useState,  } from 'react'
import styled from 'styled-components'
import { getImageHeader } from '../../../services/songs'
import StyledButton from '../../../ui/StyledButton/StyledButton'
const SongComponent = ({onFavClick,datafav,songData}) => {
  // console.log(songData.name)
  const songName = songData.name
  const duration = 322
  
  const [imgUrl,setImgUrl] = useState(()=>(null))

  
  return (
    <StyledSongComponent>
      <header>
        <StyledButton id={songData.id} onClick={onFavClick} className='position' data-fav={datafav} like>{datafav?'💓':'🖤'}</StyledButton>
      </header>
      <img src={imgUrl} />
      <footer>
        <h4>{songName}</h4>
        <p>{Math.floor(duration/60)}:{duration-60*Math.floor(duration/60)}</p>
      </footer>
    </StyledSongComponent>
  )
}

const StyledSongComponent = styled.article`
  
  width:90vw;
  max-width: 300px;
  background: var(--color-medium);
  border-radius: 2%;
  img {
    width: 100%;
    border-top-left-radius: 2%;
    border-top-right-radius: 2%;
  }
  header {
    position:relative;
    width:100%;
    
    display:flex;
    flex-direction: row;

  }

  footer {
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding:0 2rem;
    
    h4 {
    text-transform:capitalize;
    color: var(--color-dark);
    }
  }

  .position {
    margin:0.5rem;
    position:absolute;
    right:0;
  }
  
  @media (max-width: 768px) {

    max-width:90%;

  }


`

export default SongComponent