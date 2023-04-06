import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import SetlistComponent from '../../components/SetlistComponent/SetlistComponent'
const SetlistPage = () => {

  const {setlists} = useOutletContext()

  return (
    <main>

    {setlists.map(setlist => (

      <SetlistComponent key={setlist.id} setlist={setlist} />

    ))}

    </main>
  )
}

export default SetlistPage