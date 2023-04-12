import React from 'react'
import { useOutletContext, useParams } from 'react-router-dom'
import {StyledMain, StyledHeader} from './SetlistDetailPage.element'


const SetlistDetailPage = () => {
    const {songs, setlists} = useOutletContext()
    const {id} = useParams()

  return (
    <StyledMain>
        <StyledHeader>
            <h1>Setlist</h1>
            <div>
                <h1>{setlists.filter(setlist=>setlist.id ==id)[0]?.name}</h1>
                <h2>{setlists.filter(setlist=>setlist.id ==id)[0]?.location}</h2>
            </div>
        </StyledHeader>
    </StyledMain>
  )
}

export default SetlistDetailPage