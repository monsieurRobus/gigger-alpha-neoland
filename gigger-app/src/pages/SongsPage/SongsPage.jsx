import React, { useContext } from 'react'
import { useOutletContext } from 'react-router-dom';


const SongsPage = () => {
  const value = useOutletContext()

  return (
    <ul>
      {value.map((song) => (
        <li>{song.name}</li>
      ))}

    </ul>
  )
}

export default SongsPage