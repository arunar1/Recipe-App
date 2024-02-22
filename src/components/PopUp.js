import React, { useContext } from "react";
import { cartContent } from "./Menu";
import { cartArray } from "./Menu";

function PopUp(props) {
  
  let ak=useContext(cartContent);
  let cart=useContext(cartArray)



 

  return (
    <div className="popUpContainer">
      <button
        className="closebtn"
        onClick={() => {
          props.setShowPopUp(false);
        }}
      >
        back
      </button>
      <div className="popUp">
        <div className="popimg">
          <div>
            <img src={props.item.strMealThumb}></img>
          </div>
        </div>
        <h1>{props.item.strMeal}</h1>
        <p>Category : &nbsp;{props.item.strCategory}</p>
        {/* <p>
          Place &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;
          {props.item.strArea}
        </p> */}
        <p className="about">
          About&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
          <div>{props.item.strInstructions}</div>
        </p>
        <div className="orderbutton">
          <button onClick={()=>{
             console.log(cart,ak)
            // let ck=props.item
            // cart([...ak,ck])
          }}>Order Now</button>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
