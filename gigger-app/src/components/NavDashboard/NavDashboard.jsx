import React from 'react'
import { Link } from 'react-router-dom'

const NavDashboard = () => {
    return (
        <nav>
            <Link to="/dashboard/profile">Profile</Link>
            <Link to="/dashboard/setlist">Setlist</Link>
            <Link to="/dashboard/songs">Songlist</Link>
        </nav>
    )
}

export default NavDashboard