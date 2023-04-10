import React, { useContext, useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom';
import SongComponent from '../../components/molecules/SongComponent/SongComponent';
import { patchUsers, getUserDataLocalStorage } from '../../services/users';
import { StyledForm, FormDivisionDiv, FormInputField, FormButton, StyledLabelSpan  } from '../../ui/StylingForm';  
import styled from 'styled-components';
const SongsPage = () => {
  const {songs,userData} = useOutletContext()

  const [user,setUser] = useState(()=>(
    userData || null ))
  
  const [songList,setSongList] = useState(songs)

  useEffect(() => {
        setSongList(songs)
    
  }, [songs]);

  useEffect(() => {
    getUserDataLocalStorage().then(res => setUser(res.data))

}, []);

  const handleFav = (e) => {
    if(e.target.dataset.fav==="true"){  
      
      const index = userData[0].favourites.indexOf(parseInt(e.target.id))
      userData[0].favourites.splice(index,1)  
      e.target.dataset.fav="false"
      e.target.innerHTML="🖤"
  }
    else{
  
      userData[0].favourites.push(parseInt(e.target.id))

      e.target.dataset.fav=true
      e.target.innerHTML="💓"
    }
    setUser(userData)
    patchUsers(userData[0].id,{favourites: userData[0].favourites})
    
  }

  const handleSubmit = (e) => {

    e.preventDefault()

  }

  if (!user) return <h1>Loading...</h1>

  return (
    
    <StyledSongPage>
      <StyledSongDivForm>
        <StyledForm onSubmit={handleSubmit}>
          <FormDivisionDiv>
            <FormInputField type="text" placeholder="Search song"/>
            <FormInputField type="text" placeholder="Search artist"/>
            
          </FormDivisionDiv>
          <FormDivisionDiv>
          <h2>Filtros:</h2>
          <StyledLabelSpan>Favourites 
            <FormInputField type="checkbox" id="fav" name="fav" value="fav"/>            
          </StyledLabelSpan>
          <StyledLabelSpan>Indie
            <FormInputField type="checkbox" id="fav" name="fav" value="indie"/>            
          </StyledLabelSpan>
          <StyledLabelSpan>Metal
            <FormInputField type="checkbox" id="fav" name="fav" value="metal"/>            
          </StyledLabelSpan>
          <StyledLabelSpan>Rock
            <FormInputField type="checkbox" id="fav" name="fav" value="rock"/>            
          </StyledLabelSpan>
          <StyledLabelSpan>Punk
            <FormInputField type="checkbox" id="fav" name="fav" value="punk"/>            
          </StyledLabelSpan>
          <StyledLabelSpan>Subnopop
            <FormInputField type="checkbox" id="fav" name="fav" value="subno"/>           
          </StyledLabelSpan>
          <StyledLabelSpan>Pop
            <FormInputField type="checkbox" id="fav" name="fav" value="pop"/>            
          </StyledLabelSpan>
          <StyledLabelSpan>70s
            <FormInputField type="checkbox" id="fav" name="fav" value="a70"/>            
          </StyledLabelSpan>
          <StyledLabelSpan>80s
            <FormInputField type="checkbox" id="fav" name="fav" value="a80"/>            
          </StyledLabelSpan>
          <StyledLabelSpan>90s
            <FormInputField type="checkbox" id="fav" name="fav" value="a90"/>            
          </StyledLabelSpan>
          <StyledLabelSpan>00s
            <FormInputField type="checkbox" id="fav" name="fav" value="a00"/>            
          </StyledLabelSpan>
          <StyledLabelSpan>10s
            <FormInputField type="checkbox" id="fav" name="fav" value="a10"/>            
          </StyledLabelSpan>
          <StyledLabelSpan>English
            <FormInputField type="checkbox" id="fav" name="fav" value="english"/>           
          </StyledLabelSpan>
          <StyledLabelSpan>Spanish
            <FormInputField type="checkbox" id="fav" name="fav" value="spanish"/>           
          </StyledLabelSpan>
          <StyledLabelSpan>Openers
            <FormInputField type="checkbox" id="fav" name="fav" value="openers"/>           
          </StyledLabelSpan>
          <StyledLabelSpan>Party
            <FormInputField type="checkbox" id="fav" name="fav" value="party"/>           
          </StyledLabelSpan>
          <StyledLabelSpan>Mashup
            <FormInputField type="checkbox" id="fav" name="fav" value="mashup"/>           
          </StyledLabelSpan>
          <StyledLabelSpan>Remember
            <FormInputField type="checkbox" id="fav" name="fav" value="remember"/>           
          </StyledLabelSpan>
          <StyledLabelSpan>Eurovision
            <FormInputField type="checkbox" id="fav" name="fav" value="eurovision"/>           
          </StyledLabelSpan>
          <StyledLabelSpan>Secuencia
            <FormInputField type="checkbox" id="fav" name="fav" value="secuencia"/>           
          </StyledLabelSpan>
          
            

          </FormDivisionDiv>
          <FormButton login>Search</FormButton>
        </StyledForm>

      </StyledSongDivForm>
      <StyledSongDivList>
      {
        songList.length!=0 ? 
        songList.map(song => (<SongComponent key={song.id} songData={song} onFavClick={handleFav} datafav={user[0].favourites.includes(song.id)}/>)) :
        <h1>Loading...</h1>
      }
      </StyledSongDivList>
    </StyledSongPage>
    
  )
}

const StyledSongPage = styled.section`

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  padding: 1rem 1rem;

`

const StyledSongDivList = styled.div`

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  padding: 1rem 1rem;


`

const StyledSongDivForm = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;
  padding: 1rem 1rem;



`

export default SongsPage