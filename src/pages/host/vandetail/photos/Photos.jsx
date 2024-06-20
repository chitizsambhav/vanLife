import React from "react";
import { useLocation } from "react-router-dom";
import './photos.css'

const Photos = ()=>{
    const location = useLocation()
    const { data } = location.state || {}
    const { imageUrl } = data

    return(
        <>
           <img src={imageUrl} alt="" />
        </>
    )

}

export default Photos