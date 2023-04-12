import React from 'react'
import { StyledSetlistComponent, StyledHeaderTitle, StyledHeaderSubtitle, ImgSmall } from './SetlistComponent.element'
import { useNavigate } from 'react-router-dom'

const SetlistComponent = ({setlist,songs}) => {

    const setListName = setlist.name
    const setListDate = setlist.date
    const setListLocation = setlist.location
    const setListNumberSongs = setlist.selection.length
    const navigate = useNavigate()
    const time = (duration) => {
        const minutes = Math.floor(duration/60)
        const seconds = duration-60*Math.floor(duration/60)
        return `${minutes}:${seconds<10 ? '0':''}${seconds}`
      }

      const navigateSetlist= (id) => {
        navigate(`/dashboard/setlist/${id}`)
      }
    

    const getSetlistTotalTime = () => {
        let totalTime = 0
        setlist.selection.forEach(song => {
            totalTime += songs.find(songData => songData.id === song).duration 
        })

        totalTime = time(totalTime)

        return totalTime
    }

    return (
        <StyledSetlistComponent onClick={()=>navigateSetlist(setlist.id)}>
            <header>
                <StyledHeaderTitle>
                    <h1>{setListName}</h1>
                </StyledHeaderTitle>
                <StyledHeaderSubtitle>
                    <h2>{setListLocation}</h2>
                    <h3>{setListDate}</h3>
                </StyledHeaderSubtitle>
            </header>
            <main>
                {setlist.selection.map((song,index) => (<ImgSmall key={index} src={songs.find(songData => songData.id === song)?.img} />))}
            </main>
                
                <footer>
                    <div>
                        <p>{setListNumberSongs} canciones</p>
                    </div>
                    <div>
                        <p>{getSetlistTotalTime()}</p>
                    </div>
                    
                </footer>
        </StyledSetlistComponent>
    )
}


export default SetlistComponent