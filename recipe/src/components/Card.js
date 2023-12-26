import React from 'react'

function Card(props) {
    const popUpHandler=(item)=>{
        props.setSelectedItem(item)
        props.setShowPopUp(!props.showPopUp)
      }
  return (
 <li>
    <a onClick={()=>{popUpHandler(props.item)}}> <img  className='border-radius-5' src={props.item.strMealThumb}/></a>
    <h3 className='automar'>{props.item.strCategory}</h3>
</li>
  )
}

export default Card