import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import App from './App'
import ProtectedLayout from './components/ProtectedLayout/ProtectedLayout'
import { SongsContextProvider } from './context/SongsContextProvider'
import {UserContextProvider} from './context/UserContextProvider'
import './index.css'
import LoginPage from './pages/LoginPage/LoginPage'
import Page404 from './pages/Page404/Page404'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import SetlistPage from './pages/SetlistPage/SetlistPage'
import SongsPage from './pages/SongsPage/SongsPage'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>  
    <UserContextProvider> 
    <BrowserRouter basename="/">
      <Routes>
          <Route element={<App />} >
            <Route path="/" index element={<LoginPage/>} />
            <Route path="/register" element={<RegisterPage/>} />   
          </Route> 

          
            <Route path="/dashboard" element={<ProtectedLayout />}>
              <Route path="profile" element={<ProfilePage />} />
              <Route path="setlist" element={<SetlistPage />} />
              <Route path="songs" element={<SongsPage />} />
            </Route>
         

          <Route path="*" element={<Page404 />} />       
      </Routes> 
    </BrowserRouter> 
    </UserContextProvider>          
  </React.StrictMode>
)