import React, { useContext } from 'react'
import { useOutletContext } from 'react-router-dom';


const SongsPage = () => {
  const [songs, setSongs] = useOutletContext();

  return (
    <div>{console.log(songs)}</div>
  )
}

export default SongsPage