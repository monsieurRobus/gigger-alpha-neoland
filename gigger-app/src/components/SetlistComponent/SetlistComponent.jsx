import React from 'react'

const SetlistComponent = ({setlist}) => {
    return (
        <figure>
            <h1>{setlist.name}</h1>
            <h2>{setlist.date}</h2>
            <h3>{setlist.location}</h3>
            <h3>{setlist.selection.length}</h3>
        </figure>
    )
}

export default SetlistComponent