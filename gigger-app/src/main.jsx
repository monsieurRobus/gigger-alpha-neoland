import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import ProtectedLayout from './components/ProtectedLayout/ProtectedLayout'
import {UserContextProvider} from './context/UserContextProvider'
import './index.css'
import LoginPage from './pages/LoginPage/LoginPage'
import Page404 from './pages/Page404/Page404'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import SetlistPage from './pages/SetlistPage/SetlistPage'
import SongsPage from './pages/SongsPage/SongsPage'
import TitleHeader from './components/atoms/TitleHeader/TitleHeader'
import DashboardPage from './pages/DashboardPage/DashboardPage'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>  
    <UserContextProvider> 
    <BrowserRouter basename="/">
      <Routes>

          <Route element={<App />} >
            <Route path="/" element={<LoginPage/>} />
            <Route path="/register" element={<RegisterPage/>} />   
          </Route> 

        
          <Route path="/dashboard" element={<ProtectedLayout />}>
            <Route path="" element={<DashboardPage/>} end/>
            <Route  path="profile" element={<ProfilePage />} end/>
            <Route path="setlist" element={<SetlistPage />} />
            <Route path="songs" element={<SongsPage />} />
          </Route>
          
          <Route path="*" element={<Page404 />} />       
      </Routes> 
    </BrowserRouter> 
    </UserContextProvider>          
  </React.StrictMode>
)