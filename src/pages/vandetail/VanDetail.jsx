import React, { useEffect } from "react";
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { IoIosArrowRoundBack } from "react-icons/io";
import './vanDetail.css'


const VanDetail = ()=>{
    const location = useLocation() 
    const { data }= location.state || {}
    const navigate = useNavigate();
    useEffect(()=>{
        if(!data){
            navigate('/404')
        }
    },[data])
    if (!data) {
        return null;
    }
    const { id, name, price, desc, imgURL, type, search, typeFilter } = data
    
    return (
        <>
        <div className="vanLife__vandDetail">
            <div className="vanLife-link">
                        <Link to={`/vans${search ? `?${search}` : ''}`}>
                                <IoIosArrowRoundBack/>
                                <p>Back to {`${typeFilter ? `${typeFilter}` : 'all'}`} vans</p>
                        </Link>
            </div>
            <div className="vanLife__vanDetail-hero">
                <img src={imgURL} alt="van-img" />
                <div className="vanLife__vanDetail-details">
                    <div className="header">
                        <div className={`van-type ${type} selected`}>
                            <h4>{type}</h4>
                        </div>
                        <h1>{name}</h1>
                    </div>
                    <p><span className="price">{`$${price}`}</span>/day</p>
                    <p className="desc">{desc}</p>
                    <div className="vanLife__vanDetail-cta">
                        <button>Rent this van</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default VanDetail