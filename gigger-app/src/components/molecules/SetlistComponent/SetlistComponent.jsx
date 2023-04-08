import React from 'react'
import styled from 'styled-components'
import StyledButton from '../../../ui/StyledButton/StyledButton'

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
            console.log(song)
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

const StyledSetlistComponent = styled.article`
width:90vw;
max-width: 300px;
height: 300px;
background-color: var(--color-medium);
border-radius: 2%;
position:relative;
    header {

        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem 1rem;

        h1,h2,h3,h4,h5,h6 {
            margin: 0;
            color: var(--color-dark);
            text-shadow: 1px 1px 3px var(--color-light);
        }
    }

    footer {

        border-bottom-left-radius: 10%;
        border-bottom-right-radius: 10%;
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

`

export default SetlistComponent