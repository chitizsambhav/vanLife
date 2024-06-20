import React from "react";
import { Link } from "react-router-dom";
import './page404.css'
const Page404 = ()=>{
    
    return(
        <>
            <div className="vanLife__page404-container">
                <h1>Sorry, the page you were looking for was not found</h1>
                <Link to='/'>Return to home</Link> 
            </div>
        </>
    )
    
}

export default Page404