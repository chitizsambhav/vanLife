import React from "react";
import { NavLink } from 'react-router-dom'
import './navbar.css'

const Menu = () => {
    return(
        <>
            <p><NavLink to='/host' className={({isActive})=> isActive ? 'navlink' : '' }>Host</NavLink></p>
             <p><NavLink to='/about' className={({isActive})=> isActive ? 'navlink' : '' }>About</NavLink></p>
             <p><NavLink to='/vans' className={({isActive})=> isActive ? 'navlink' : '' }>Vans</NavLink></p>
        </>
       
    )
}

const Navbar = () =>{
    return(
        <div className="vanLife__navbar">
            <div className="vanLife__navbar-home">
                <h1><NavLink to='/'>#VANLIFE</NavLink></h1>
            </div>
            <div className="vanLife__navbar-menu">
                <Menu />
            </div>
        </div>
    )
}

export default Navbar