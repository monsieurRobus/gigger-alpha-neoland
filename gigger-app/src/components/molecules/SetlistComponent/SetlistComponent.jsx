import React from 'react'
import styled from 'styled-components'
import StyledButton from '../../../ui/StyledButton/StyledButton'
import { StyledSetlistComponent } from './SetlistComponent.element'

const SetlistComponent = ({setlist,songs}) => {

    const setListName = setlist.name
    const setListDate = setlist.date
    const setListLocation = setlist.location
    const setListNumberSongs = setlist.selection.length

    const time = (duration) => {
        const minutes = Math.floor(duration/60)
        const seconds = duration-60*Math.floor(duration/60)
        return `${minutes}:${seconds<10 ? '0':''}${seconds}`
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
        <StyledSetlistComponent>
            <header>
                <div>
                    <h1>{setListName}</h1>
                    <h2>{setListLocation}</h2>
                    <h3>{setListDate}</h3>
                </div>   
                {/* <StyledButton id={setlist.id} onClick={onFavClick} className='position' data-fav={datafav} like>{datafav?'💓':'🖤'}</StyledButton> */}
            </header>
                
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