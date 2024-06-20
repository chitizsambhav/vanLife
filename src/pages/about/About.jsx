
import React from 'react'
import imgURL from '../../assets/kevin-schmid-Mta8r0bxhbo-unsplash.jpg'
import './about.css'
import { useNavigate } from 'react-router-dom'
const About = () =>{
    const navigate = useNavigate()
    const buttonClick = ()=>{
        navigate('/vans')
    }
    return(
        <>
            <div className='vanLife__about'>
                <img src={imgURL} alt="" />
                <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
                <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                    (Hitch costs extra 😉) <br />  <br />
                    Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
                <div className='vanLife__about-cta'>
                    <h3>Your destination is waiting. Your van is ready.</h3>
                    <button onClick={buttonClick}>Explore our vans</button>
                </div>
            </div>
        </>
        
    )
}

export default About