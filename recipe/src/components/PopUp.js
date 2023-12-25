import React from 'react'

function PopUp(props) {
  return (
    <div className='popUpContainer'>
        <div className='popUp'>
        <h1>Heading</h1>
        <p>Description</p>
        <button onClick={()=>{
            props.setShowPopUp(false)
        }}>back</button>
    </div>
    </div>
  )
}

export default PopUp