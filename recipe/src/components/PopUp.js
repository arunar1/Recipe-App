import React from 'react'

function PopUp(props) {
    console.log(props)
  return (
    <div className='popUpContainer'>
        <div className='popUp'>
        <div className="popimg">
        <div>
        <img src={props.item.strMealThumb}></img>
        <h1>{props.item.strMeal}</h1>
        </div>
        </div>
        <p>Category : &nbsp;{props.item.strCategory}</p>
        <p>Place &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;{props.item.strArea}</p>
        <p>About   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;{props.item.strInstructions}</p>
        <div className="backbutton">
        <button onClick={()=>{
            props.setShowPopUp(false)
        }}>back</button>
        </div>
    </div>
    </div>
  )
}

export default PopUp