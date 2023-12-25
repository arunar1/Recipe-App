import React from 'react'

function Card(props) {
  return (
    <li className='normal img-size '>
    <img className='size1 border-radius-5' src={props.item.strMealThumb}/>
    <h2>{props.item.strMeal}</h2>
  </li>
  )
}

export default Card