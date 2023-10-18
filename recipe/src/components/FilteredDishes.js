import React, { useState } from 'react'

export default function FilteredDishes(props) {
 
console.log(props.allmenus)
  
  
  const [filtereddishes,setfiltereddishes]=useState([])
  const showFilteredDishes=(category)=>{

  let filtereddish=props.allmenus.filter((item)=>{
      console.log(item)
      return item.strCategory===category
    }).map((item)=>{
      return(
        <li className='normal'>
          <img className='size1' src={item.strMealThumb}/>
          <h2>{item.strMeal}</h2>
        </li>
      )
    })
    setfiltereddishes(filtereddish)
    

  }
  const allcategories= props.allmenucategories.map((item)=>{
    return(
      <li onClick={()=>{showFilteredDishes(item.strCategory)}} className='categoryspecial'>{item.strCategory}</li>
    )

  })

  console.log(filtereddishes)

 
  return (
    <div className="filtered-dishes">
      <div className="container">
        <h2>Choose your Dishes</h2>

      </div>
      <div>
        <ul className='flex listdec'>
            {allcategories}
        </ul>
      </div>
      <div className="filtered-dishes-list">
        <ul className='flex listdec'>
          {filtereddishes}

        </ul>

      </div>
    </div>
  )
}
