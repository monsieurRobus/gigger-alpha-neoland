import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import SetlistComponent from '../../components/SetlistComponent/SetlistComponent'
import styled from 'styled-components'

const SetlistPage = () => {

  const {songs,setlists} = useOutletContext()

  return (
    <StyledSetlisPage>

    {setlists.map(setlist => (

      <SetlistComponent key={setlist.id} setlist={setlist} songs={songs}/>

    ))}

    </StyledSetlisPage>
  )
}

const StyledSetlisPage = styled.main`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  padding: 1rem 0;
`


export default SetlistPage