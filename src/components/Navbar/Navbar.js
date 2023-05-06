import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <nav className='navbar'>
            <div className='nav__options'>
                <span className='nav__red__dot'></span>
                <img draggable='false' src='./assets/icons/navNotification.svg' alt='notification' />
                <img draggable='false' src='./assets/icons/navCalendar.svg' alt='calender' />
                <img draggable='false' src='./assets/icons/navWindow.svg' alt='window' />
                <img className='nav__user' draggable='false' src='./assets/images/navUser.svg' alt='user' />
                <span className='nav__green__dot'></span>
            </div>
        </nav>
    )
}

export default Navbar