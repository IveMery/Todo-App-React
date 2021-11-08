import React from 'react'
import Nav from '../components/Nav'
import Title from '../components/Title'
import '../style.css/navbar.css'

const NavBar = () => {
    return (
        <Nav className="navbar sticky-top text-white rounded-bottom nav">
            <Title className="mx-3">Todo App</Title>
        </Nav>
    )
}

export default NavBar
