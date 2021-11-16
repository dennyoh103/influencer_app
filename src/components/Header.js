import React from 'react'
import { Navbar } from 'reactstrap'
import './Header.css'

// Simple Header (navbar) component at the top of the app
function Header() {
    return (
        <Navbar className = 'header'>
            <h1 className ='header_name' >INFLUENCER APP</h1>
        </Navbar>
    )
}

export default Header
