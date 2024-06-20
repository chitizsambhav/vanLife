import React from "react";
import { useLocation } from "react-router-dom";
import './pricing.css'
const Pricing = ()=>{
    const location = useLocation()
    const { data } = location.state || {}
    const { price } = data

    return(
        <>
           <p><span className="price">{`$${price}`}</span>/day</p>
        </>
    )

}

export default Pricing