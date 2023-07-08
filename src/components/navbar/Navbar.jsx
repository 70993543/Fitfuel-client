import React, {useState} from 'react'
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'
import './navbar.css'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const closeMenu = () => {
        setIsOpen(false)
    }

  return (
    <header className='header'>
        <nav className='header__nav'>
            <div className="header__logo">
                <img src={logo} className='header__logo-icono' alt="" />
                <p className="header__logo-titulo">Fitfuel</p>
            </div>
            <ul className={`header__menu ${isOpen && 'open'}`}>
                <li className="header__menu-element" onClick={closeMenu}>
                    <NavLink to="/" className="header__menu-link">Home</NavLink>
                </li>
                <li className="header__menu-element" onClick={closeMenu}>
                    <NavLink to="/service" className="header__menu-link">Service</NavLink>
                </li>
                <li className="header__menu-element" onClick={closeMenu}>
                    <NavLink to="/about" className="header__menu-link">About Us</NavLink>
                </li>
                <li className="header__menu-element" onClick={closeMenu}>
                    <NavLink to="/" className="header__menu-link">Contact</NavLink>
                </li>
            </ul>
            <div className={`header__toogle ${isOpen && 'open'}`} onClick={()=>{setIsOpen(!isOpen)}}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    </header>

  )
}

export {Navbar};