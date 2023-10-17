import React from 'react'

export default function FilteredDishes(props) {
  console.log(props.allmenucategories)
  console.log(props.allmenus )
  const showFilteredDishes=()=>{
    alert("hi")


  }
  const allcategories= props.allmenucategories.map((item)=>{
    return(
      <li onClick={showFilteredDishes} className='categoryspecial'>{item.strCategory}</li>
    )

  })


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

        </ul>

      </div>
    </div>
  )
}
