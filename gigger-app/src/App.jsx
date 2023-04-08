import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import HomeLayout from './components/HomeLayout/HomeLayout'
import styled from 'styled-components'




function App() {

  return (
    <div className="App">
      <HomeLayout />
    </div>
  )
}

export default App
