import React, { useEffect } from "react";
import './HostVanDetail.css'
import { useLocation, Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";



const HostVanDetail = () =>{
    const location = useLocation()
    const {data} = location.state || {}
    const navigate = useNavigate()
    useEffect(()=>{
        if (!data){
            navigate('/404')
        }
    }, [data])
    if (!data){
        return null
    }
    const{ id, name, price, imageUrl, desc, type} = data
    return(
        <>
            <div className="vanLife-hostVanDetail"></div>
                <div className="vanLife-link">
                            <Link to={`..`} relative="path">
                                    <IoIosArrowRoundBack/>
                                    <p>Back to all vans</p>
                            </Link>
                </div>
                <div className="vanLife-hostVanDetail__container">
                    <div className="vanLife-hostVanDetail__hero">
                        <div className="vanLife__hostVanDetail-container__img">
                                <img src={imageUrl} alt="van-img" />
                        </div>
                        {/* <div className="vanLife__hostVansDetails-container__desc">
                            <div className={`van-type ${type} selected`}>
                                    <h4>{type}</h4>
                                </div>
                            <h1><strong>Name: </strong>{name}</h1>
                            <p>{`$${price}/day`}</p>
                        </div> */}
                    </div>
                    <div className="vanLife__hostVanDetail-continainer__nav">
                        <p><NavLink 
                            to={`.`} end 
                            className={({isActive})=> isActive ? 'navlink' : '' } 
                            state={{data:{id:id, name:name, price:price, imageUrl:imageUrl, desc:desc, type:type}}} >Details</NavLink></p>
                        <p><NavLink to={`pricing`} 
                            className={({isActive})=> isActive ? 'navlink' : '' } 
                            state={{data:{id:id, name:name, price:price, imageUrl:imageUrl, desc:desc, type:type}}}>Pricing</NavLink></p>
                        <p><NavLink to={`photos`} 
                            className={({isActive})=> isActive ? 'navlink' : ''} 
                            state={{data:{id:id, name:name, price:price, imageUrl:imageUrl, desc:desc, type:type}}}>Photos</NavLink></p>
                    </div>
                    <div className="vanLife__hostVanDetail-outlet">
                        <Outlet />
                    </div>
                </div>


        </>
    )
}

export default HostVanDetail