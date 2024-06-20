import Navbar from '../../components/navbar/Navbar'
import React, { useEffect } from 'react'
import './home.css'
import Footer from '../../components/footer/Footer'
import { useNavigate } from 'react-router-dom'

const Home = () =>{
    const navigate = useNavigate()
        const buttonClick = ()=>{
        navigate('/vans')
    }
    
    return(
        <>
        <div className='vanLife__home-container overlay'>
            <div className='vanLife__home-desc'>
                <h1>You got the travel plans, we got the travel vans.</h1>
                <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
                <button onClick={buttonClick}>Find your van</button>
            </div>
        </div>
        </>
        
    )
}

export default Home