import React from 'react'
import {useEffect } from 'react'

export default function Menu() {

    useEffect(()=>{
        const fetchdata=(async()=>{
        const API_URL="https://www.themealdb.com/api/json/v1/1/search.php?f=a"
         let response=await fetch(API_URL)
         let data= await response.json()
         console.log(data)
        })
        fetchdata()
    },[])
  return (
    <div>
        <h1>hoi</h1>
      
    </div>
  )
}
