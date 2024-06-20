import React from "react";
import './vantile.css'
import { Link } from "react-router-dom";


const Vantile = ({ id, name, price, desc, imgURL, type, search, typeFilter })=>{
    const dataToPass = {id:id, name:name, price:price, desc:desc, imgURL:imgURL, type:type, search:search, typeFilter:typeFilter }
    return(
        <> 
            <div className="vanLife__tile">
                <Link to={`${id}`} state={{ data: dataToPass }}>
                    <div className="vanLife__tile-container">
                        <img src={imgURL} alt="van-photo" />
                        <div className="vanLife__tile-header">
                            <h3>{name}</h3>
                            <div className="vanLife__tile-header-price">
                                <h3>{`$${price}`}</h3>
                                <p>/day</p>
                            </div>
                        </div>
                        <div className={`van-type ${type} selected`}>
                            <h4>{type}</h4>
                        </div>
                    </div>
                </Link>
            </div>  
        </>
    )
}

export default Vantile