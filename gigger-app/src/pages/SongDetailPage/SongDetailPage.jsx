import React from 'react'
import { useParams } from 'react-router-dom'


const SongDetailPage = () => {

  const {id} = useParams()

  return (
    <div>{id}</div>
  )
}

export default SongDetailPage