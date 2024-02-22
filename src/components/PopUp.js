import React, { useContext } from "react";

import { cartContent } from "./Menu";

function PopUp(props) {
  console.log(props)
  
  const { cart, setcart } = useContext(cartContent);

  console.log(cart)

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
            let ak=props.item;
            let flag=0
            cart.map((element)=>{
              if(element.idMeal===ak.idMeal){
                flag=1
              }
            })
            if(!flag){
              setcart([...cart,ak])
              props.setShowPopUp(false);
            }
            else{
              alert("Already Added")
            }
            
            console.log(cart)     
          }}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
