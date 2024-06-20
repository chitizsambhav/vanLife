
import React, { useEffect, useState } from "react"
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import './vans.css'
import '../../server'
import getVans from '../../api'
import { useSearchParams, useLoaderData } from "react-router-dom"
import Vantile from "../../components/vantile/Vantile"


export function loader(){
    return getVans()
}

export const Vans = () =>{

    const  [searchParams, setSearchParams ] = useSearchParams()
    const data = useLoaderData()
    const typeFilter = searchParams.get('type')
    var filteredItems = typeFilter ? 
    data.filter(data => (data.type.toLowerCase() === typeFilter)): data

    function handleSearchParams(key, value){
        setSearchParams(prevParams => {
            if(value === null){
                prevParams.delete(key)
            }else{
                prevParams.set(key,value)
            }
            return prevParams
        })
    }

    if (filteredItems.length === 0){
        filteredItems = data
    }
    return(
        <>
        <div className="vanLife__vans">
            <h1>Explore our van options</h1>
            <div className="vanLife__vans-filter">
                <div className="vanLife__vans-filter-type">
                    <button onClick={() => handleSearchParams('type', 'simple')} className={`van-type simple ${typeFilter ==='simple' ? 'selected': ''}`}>simple</button>
                    <button onClick={() => handleSearchParams('type', 'rugged')} className={`van-type rugged ${typeFilter ==='rugged' ? 'selected': ''}`}>rugged</button>
                    <button onClick={() => handleSearchParams('type', 'luxury')} className={`van-type luxury ${typeFilter ==='luxury' ? 'selected': ''}`}>luxury</button>
                </div>
               <div className="vanLife__vans-filter-clear">
                    {typeFilter ? 
                    <button onClick={() => handleSearchParams('type', null)}>Clear filters</button> :
                    null}   
               </div>
            </div>
            <div className="vanLife__list-container">
                {filteredItems && filteredItems.map((item, index) => {
                        return <Vantile key={item.id} id={item.id} name={item.name} price={item.price} desc ={item.description} imgURL={item.imageUrl} type={item.type} search={searchParams.toString()} typeFilter={typeFilter}/>
                        })}
            </div>
        </div>
        </>
    )
}