import React from "react";
import { useLocation } from "react-router-dom";

const Details = ()=>{
    const location = useLocation()
    const { data } = location.state || {}
    const { name, desc, type } = data

    return(
        <>
            <p><strong>Name: </strong>{name}</p>
            <p><strong>Category: </strong>{type}</p>
            <p><strong>Description: </strong>{desc}</p>
            <p><strong>Visibility: </strong>Public</p>
        </>
    )

}

export default Details