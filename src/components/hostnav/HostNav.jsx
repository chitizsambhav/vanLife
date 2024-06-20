import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import './hostnav.css'

const HostNav = ()=>{
    return (
        <>
            <div className="vanLife__hostNav">
                <p><NavLink to='.' end className={({isActive})=> isActive ? 'navlink' : '' }>Dashboard</NavLink></p>
                <p><NavLink to='income' className={({isActive})=> isActive ? 'navlink' : '' }>Income</NavLink></p>
                <p><NavLink to='vans' className={({isActive})=> isActive ? 'navlink' : '' }>Vans</NavLink></p>
                <p><NavLink to='reviews' className={({isActive})=> isActive ? 'navlink' : '' }>Reviews</NavLink></p>
            </div>
            <Outlet />
        </>
    )
}
export default HostNav