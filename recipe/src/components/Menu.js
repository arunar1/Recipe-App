import React from 'react'
import {useEffect,useState } from 'react'
import Hero from './Hero'
import Special from './Special'
export default function Menu() {
    const [menu,setmenu]=useState([])
    const fetchdata=(async()=>{
        const API_URL="https://www.themealdb.com/api/json/v1/1/search.php?f=c"
         let response=await fetch(API_URL)
         let data= await response.json()
         setmenu(data.meals)
         console.log(menu)
        })
    useEffect(()=>{
        fetchdata()
    },[])
    console.log(menu)
    let menuImages=menu.map((item)=>{
        return (
           <div>
            <img src={item.strMealThumb} />
            <h2>{item.strCategory}</h2>
           </div>
        )
    })
    
  return (
    <div>
       <Hero/> 
       <Special  specialmenu={menu}/>
    </div>
  )
}
