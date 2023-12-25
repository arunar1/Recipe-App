import React from 'react'

function PopUp(props) {
    console.log(props)
  return (
    <div className='popUpContainer'>
        <div className='popUp'>
        <h1>{props.item.strMeal}</h1>
        <p>{props.item.strCategory}</p>
        <p>{props.item.strArea}</p>
        <p>{props.item.strInstructions}</p>
        <button onClick={()=>{
            props.setShowPopUp(false)
        }}>back</button>
    </div>
    </div>
  )
}

export default PopUp