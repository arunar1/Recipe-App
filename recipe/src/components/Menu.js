import React from 'react'
import { useState,useEffect } from 'react'

export default function Menu() {
    // const [data,setdata]=useState()
    useEffect((async)=>{
        const API_URL='www.themealdb.com/api/json/v1/1/search.php?f=a'
         let response=fetch(API_URL)
         let data=response.json()
         
    },[])
  return (
    <div>
        <h1></h1>
      
    </div>
  )
}
