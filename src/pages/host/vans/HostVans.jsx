import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import './HostVans.css'
import '../../../server'


export default function HostVans() {
    const [vans, setVans] = useState([])

    useEffect(() => {
        fetch("/api/host/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const Vantile = ({id, name, price, imageUrl, desc, type}) =>{
        const dataToPass = {id:id, name:name, price:price, imageUrl:imageUrl, desc:desc, type:type}
        return(
            <>
            <Link to={`${id}`} state={{data:dataToPass}}>
                <div className="vanLife__hostVans-container__tile">
                    <div className="vanLife__hostVans-container__tile-img">
                        <img src={imageUrl} alt="van-img" />
                    </div>
                    <div className="vanLife__hostVans-container__tile-desc">
                        <h1>{name}</h1>
                        <p>{`$${price}/day`}</p>
                    </div>
                </div>
            </Link>
                
            </>
        )
    }
    return(
      <>
      <div className="vanLife__hostVans">
        <h1>Your listed vans</h1>
        <div className="vanLife__hostVans-container">
            {vans && vans.map(van =>{
                return <Vantile key={van.id} id={van.id} name={van.name} price={van.price} imageUrl={van.imageUrl} desc={van.description} type={van.type}/>
            })}
        </div>
      </div>
      </>
    )
}
