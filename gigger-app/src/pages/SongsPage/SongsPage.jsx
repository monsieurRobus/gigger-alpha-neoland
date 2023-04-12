import React, { useContext, useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom';
import SongComponent from '../../components/molecules/SongComponent/SongComponent';
import { patchUsers, getUserDataLocalStorage } from '../../services/users';
import { StyledSongDivList ,StyledSongDivForm , FormInputField, StyledSongPage, SeparatorsDiv, StyledSeparators, StyledLabelSpan2, StyledForm2, FormDivisionDiv2  } from '../../ui/StylingForm';  
import ButtonMenu from '../../ui/ButtonMenu/ButtonMenu';
import Pagination from 'react-bootstrap/Pagination'
const SongsPage = () => {
  const {songs,userData} = useOutletContext()
  
  const [bandFilter,setBandFilter] = useState('')
  const  [songFilter,setSongFilter] = useState('')
  const [tagsFilter,setTagsFilter] = useState([])
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

  const filterSongValue = (e) => {

    setSongFilter(e.target.value)

  }

  const filterBandValue = (e) => {

    setBandFilter(e.target.value)

  }

  const filterTagsValue = (e) => {

    const tagsFilterCopy = [...tagsFilter]
    e.target.checked ? tagsFilterCopy.push(e.target.value) : tagsFilterCopy.splice(tagsFilterCopy.indexOf(e.target.value),1)
    setTagsFilter(tagsFilterCopy)

  }

  const isInTags = (filter,tags) => {
    
    

    const result = tags.includes(filter) 

    return result   
    

  }

  if (!user) return <h1>Loading...</h1>

  return (
    
    <StyledSongPage>
    <ButtonMenu addSongMenu/>
      <StyledSongDivForm>

      <SeparatorsDiv>
            <StyledSeparators></StyledSeparators>
            <h1>Filters</h1>
            <StyledSeparators></StyledSeparators>
          </SeparatorsDiv>
        <StyledForm2>
          <FormDivisionDiv2>
            <FormInputField onChange={filterSongValue} type="text" placeholder="Search song"/>
            <FormInputField onChange={filterBandValue} type="text" placeholder="Search artist"/>            
          </FormDivisionDiv2>
          
          <FormDivisionDiv2>          
            <StyledLabelSpan2>Indie
              <FormInputField onChange={filterTagsValue} type="checkbox" id="fav" name="fav" value="indie"/>            
            </StyledLabelSpan2>
            <StyledLabelSpan2>Metal
              <FormInputField onChange={filterTagsValue} type="checkbox" id="fav" name="fav" value="metal"/>            
            </StyledLabelSpan2>
            <StyledLabelSpan2>Rock
              <FormInputField onChange={filterTagsValue} type="checkbox" id="fav" name="fav" value="rock"/>            
            </StyledLabelSpan2>
            <StyledLabelSpan2>Punk
              <FormInputField onChange={filterTagsValue} type="checkbox" id="fav" name="fav" value="punk"/>            
            </StyledLabelSpan2>
            <StyledLabelSpan2>Subnopop
              <FormInputField onChange={filterTagsValue} type="checkbox" id="fav" name="fav" value="subnopop"/>           
            </StyledLabelSpan2>
            <StyledLabelSpan2>Pop
              <FormInputField onChange={filterTagsValue} type="checkbox" id="fav" name="fav" value="pop"/>            
            </StyledLabelSpan2>
            <StyledLabelSpan2>70s
              <FormInputField onChange={filterTagsValue} type="checkbox" id="fav" name="fav" value="70s"/>            
            </StyledLabelSpan2>
            <StyledLabelSpan2>80s
              <FormInputField onChange={filterTagsValue} type="checkbox" id="fav" name="fav" value="80s"/>            
            </StyledLabelSpan2>
            <StyledLabelSpan2>90s
              <FormInputField onChange={filterTagsValue} type="checkbox" id="fav" name="fav" value="90s"/>            
            </StyledLabelSpan2>
            <StyledLabelSpan2>00s
              <FormInputField onChange={filterTagsValue} type="checkbox" id="fav" name="fav" value="00s"/>            
            </StyledLabelSpan2>
            <StyledLabelSpan2>10s
              <FormInputField onChange={filterTagsValue} type="checkbox" id="fav" name="fav" value="10s"/>            
            </StyledLabelSpan2>
            <StyledLabelSpan2>English
              <FormInputField onChange={filterTagsValue} type="checkbox" id="fav" name="fav" value="english"/>           
            </StyledLabelSpan2>
            <StyledLabelSpan2>Spanish
              <FormInputField onChange={filterTagsValue} type="checkbox" id="fav" name="fav" value="spanish"/>           
            </StyledLabelSpan2>
            <StyledLabelSpan2>Openers
              <FormInputField onChange={filterTagsValue} type="checkbox" id="fav" name="fav" value="openers"/>           
            </StyledLabelSpan2>
            <StyledLabelSpan2>Party
              <FormInputField onChange={filterTagsValue} type="checkbox" id="fav" name="fav" value="party"/>           
            </StyledLabelSpan2>
            <StyledLabelSpan2>Mashup
              <FormInputField onChange={filterTagsValue} type="checkbox" id="fav" name="fav" value="mashup"/>           
            </StyledLabelSpan2>
            <StyledLabelSpan2>Remember
              <FormInputField onChange={filterTagsValue} type="checkbox" id="fav" name="fav" value="remember"/>           
            </StyledLabelSpan2>
            <StyledLabelSpan2>Eurovision
              <FormInputField onChange={filterTagsValue} type="checkbox" id="fav" name="fav" value="eurovision"/>           
            </StyledLabelSpan2>
            <StyledLabelSpan2>Secuencia
              <FormInputField onChange={filterTagsValue} type="checkbox" id="fav" name="fav" value="secuencia"/>           
            </StyledLabelSpan2>
          </FormDivisionDiv2>
            
        </StyledForm2>

      </StyledSongDivForm>

      <SeparatorsDiv>
        <StyledSeparators></StyledSeparators>
        <h1>Songs</h1>
        <StyledSeparators></StyledSeparators>
      </SeparatorsDiv>

      <StyledSongDivList>
      {
        songList.length!=0 ? 
        songList
        .filter(song => song.band.toLowerCase().includes(bandFilter.toLowerCase()))
        .filter(song => song.name.toLowerCase().includes(songFilter.toLowerCase()))
        .filter(song => tagsFilter == 0 ? true : tagsFilter.every(tag=>isInTags(tag,song.tags)))
        .map(song => (<SongComponent key={song.id} songData={song} onFavClick={handleFav} datafav={user[0].favourites.includes(song.id)}/>)) :
        <h1>Loading...</h1>

      }

      </StyledSongDivList>
    </StyledSongPage>
    
  )
}

export default SongsPage