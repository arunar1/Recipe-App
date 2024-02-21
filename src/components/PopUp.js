import React, { useContext } from "react";
import { cartContent } from "./Menu";
import { cartArray } from "./Menu";

function PopUp(props) {
  let ar=[];
  let flag=0;
  console.log(ar)
  let ak=useContext(cartContent);
  let cart=useContext(cartArray)
  // console.log(props);  console.log(props)
  cart.map((element)=>{
    console.log(element)
  })
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
            
            flag=cart.map((element,index)=>{
              if(element.idMeal === props.item.idMeal){
                return 0
              }
            })
            if(flag){
            ak([...cart,props.item]);
            }
            
          }}>Order Now</button>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
